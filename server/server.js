import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { WebSocketServer } from "ws";
import { fileURLToPath } from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml"};
const lobbies=new Map();

function code(){return crypto.randomBytes(3).toString("hex").toUpperCase();}
function send(ws,message){if(ws.readyState===ws.OPEN)ws.send(JSON.stringify(message));}
function broadcast(lobby,message){for(const p of lobby.players)send(p.ws,message);}
function makeLobby(){let id;do{id=code();}while(lobbies.has(id));return {id,players:[],config:{mapId:"meadow",teamSize:1},turn:0,state:"lobby"};}

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
    if(msg.type==="lobby:join"){
      const lobby=lobbies.get(String(msg.code||"").toUpperCase()); if(!lobby||lobby.players.length>=2)return send(ws,{type:"error",message:"Lobby nicht verfügbar"});
      player={id:crypto.randomUUID(),team:1,ws,lobby};lobby.players.push(player);
      broadcast(lobby,{type:"lobby:state",players:lobby.players.map(p=>({id:p.id,team:p.team})),config:lobby.config});
      return;
    }
    if(!player)return send(ws,{type:"error",message:"Zuerst einer Lobby beitreten"});
    const lobby=player.lobby;
    if(msg.type==="match:config" && player.team===0){
      lobby.config={mapId:String(msg.mapId||"meadow"),teamSize:Math.max(1,Math.min(3,Number(msg.teamSize)||1))};
      return broadcast(lobby,{type:"match:config",config:lobby.config});
    }
    if(msg.type==="match:start" && lobby.players.length===2 && player.team===0){
      lobby.state="playing";lobby.turn=0;return broadcast(lobby,{type:"match:start",config:lobby.config,turn:lobby.turn});
    }
    if(msg.type==="turn:end"){
      if(lobby.state!=="playing"||player.team!==lobby.turn)return send(ws,{type:"error",message:"Nicht dein Zug"});
      lobby.turn=lobby.turn===0?1:0;return broadcast(lobby,{type:"turn",turn:lobby.turn});
    }
    if(msg.type==="action"){
      if(lobby.state!=="playing"||player.team!==lobby.turn)return send(ws,{type:"error",message:"Aktion nicht erlaubt"});
      const allowed=["select_worm","select_weapon","aim","fire"];
      if(!allowed.includes(msg.action))return send(ws,{type:"error",message:"Unbekannte Aktion"});
      return broadcast(lobby,{type:"action",from:player.team,action:msg.action,payload:msg.payload||{}});
    }
  });
  ws.on("close",()=>{
    if(!player)return;
    const lobby=player.lobby;lobby.players=lobby.players.filter(p=>p!==player);
    if(!lobby.players.length)lobbies.delete(lobby.id);else broadcast(lobby,{type:"lobby:state",players:lobby.players.map(p=>({id:p.id,team:p.team}))});
  });
});
server.listen(process.env.PORT||3000,()=>console.log("Worms Arena server on http://localhost:"+(process.env.PORT||3000)));
