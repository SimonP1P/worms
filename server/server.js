import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { WebSocketServer } from "ws";
import { createMatch, applyAction, snapshot } from "./match.js";
import { fileURLToPath } from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml"};
const lobbies=new Map();

function code(){return crypto.randomBytes(3).toString("hex").toUpperCase();}
function send(ws,message){if(ws.readyState===1)ws.send(JSON.stringify(message));}
function broadcast(lobby,message){for(const p of lobby.players)send(p.ws,message);}
function lobbyPlayers(lobby){return lobby.players.filter(p=>p.ws).map(p=>({id:p.id,team:p.team,connected:Boolean(p.ws)}));}
function makeLobby(){let id;do{id=code();}while(lobbies.has(id));return {id,players:[],config:{mapId:"meadow",teamSize:1,worms:[]},turn:0,state:"lobby",match:null};}

const server=http.createServer((req,res)=>{
  const requestPath=decodeURIComponent((req.url||"/").split("?")[0]);
  const relative=requestPath==="/"?"index.html":requestPath.replace(/^\/+/,"");
  const file=path.resolve(root,relative);
  if(!file.startsWith(root))return res.writeHead(403).end("Forbidden");
  fs.readFile(file,(err,data)=>{if(err)return res.writeHead(404).end("Not found");res.writeHead(200,{"Content-Type":mime[path.extname(file)]||"application/octet-stream","Cache-Control":"no-cache"});res.end(data);});
});
const wss=new WebSocketServer({server});
wss.on("connection",ws=>{
  let player=null;
  ws.on("message",raw=>{
    let msg;try{msg=JSON.parse(raw.toString())}catch{return send(ws,{type:"error",message:"Ungültige Nachricht"});}
    if(msg.type==="lobby:create"){
      const lobby=makeLobby();player={id:crypto.randomUUID(),team:0,ws,lobby};lobby.players.push(player);lobbies.set(lobby.id,lobby);
      return send(ws,{type:"lobby:created",code:lobby.id,playerId:player.id,team:0});
    }
    if(msg.type==="lobby:reconnect"){
      const lobby=lobbies.get(String(msg.code||"").toUpperCase()); const existing=lobby?.players.find(p=>p.id===msg.playerId); if(!existing||existing.disconnectedAt&&Date.now()-existing.disconnectedAt>60000)return send(ws,{type:"error",message:"Reconnect nicht möglich"}); existing.ws=ws;existing.disconnectedAt=null;player=existing;send(ws,{type:"lobby:reconnected",code:lobby.id,team:player.team});broadcast(lobby,{type:"lobby:state",players:lobbyPlayers(lobby)});if(lobby.match)send(ws,{type:"state",state:snapshot(lobby.match)});return;
    }
    if(msg.type==="lobby:join"){
      const lobby=lobbies.get(String(msg.code||"").toUpperCase()); if(!lobby||lobby.players.length>=2)return send(ws,{type:"error",message:"Lobby nicht verfügbar"});
      player={id:crypto.randomUUID(),team:1,ws,lobby};lobby.players.push(player);
      send(ws,{type:"lobby:joined",code:lobby.id,playerId:player.id,team:1});
      broadcast(lobby,{type:"lobby:state",players:lobbyPlayers(lobby),config:lobby.config});
      return;
    }
    if(!player)return send(ws,{type:"error",message:"Zuerst einer Lobby beitreten"});
    const lobby=player.lobby;
    if(msg.type==="match:config" && player.team===0){
      lobby.config={mapId:String(msg.mapId||"meadow"),teamSize:Math.max(1,Math.min(3,Number(msg.teamSize)||1)),worms:Array.isArray(msg.worms)?msg.worms.slice(0,6):[]};
      return broadcast(lobby,{type:"match:config",config:lobby.config});
    }
    if(msg.type==="match:start" && lobby.players.length===2 && player.team===0){
      lobby.state="playing";lobby.match=createMatch(lobby.config);return broadcast(lobby,{type:"match:start",config:lobby.config,turn:lobby.match.turn,state:snapshot(lobby.match)});
    }
    if(msg.type==="turn:end"){
      if(!lobby.match||lobby.match.turn!==player.team)return send(ws,{type:"error",message:"Nicht dein Zug"});
      applyAction(lobby.match,player.team,"turn:end"); return broadcast(lobby,{type:"state",state:snapshot(lobby.match)});
    }
    if(msg.type==="action"){
      if(!lobby.match||lobby.match.turn!==player.team)return send(ws,{type:"error",message:"Aktion nicht erlaubt"});
      const result=applyAction(lobby.match,player.team,msg.action,msg.payload||{});
      if(!result.ok)return send(ws,{type:"error",message:result.error});
      return broadcast(lobby,{type:"state",state:snapshot(lobby.match),from:player.team});
    }
  });
  ws.on("close",()=>{if(!player)return;player.ws=null;player.disconnectedAt=Date.now();broadcast(player.lobby,{type:"lobby:state",players:lobbyPlayers(player.lobby)});});
});
setInterval(()=>{for(const [id,lobby] of lobbies){if(lobby.players.every(p=>!p.ws)&&lobby.players.some(p=>p.disconnectedAt&&Date.now()-p.disconnectedAt>60000))lobbies.delete(id);}},15000);
server.listen(process.env.PORT||3000,()=>console.log("Worms Arena server on http://localhost:"+(process.env.PORT||3000)));
