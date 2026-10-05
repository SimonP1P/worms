import { Game } from "./game.js";
import { UI } from "./ui.js";
import { OnlineClient } from "./online.js";

const canvas = document.querySelector("#game-canvas");
const colors=["#7cf06b","#ff7c8a","#64b5ff","#ffd45a","#c98cff","#ff9f52"];
const hats=["none","hat","cap","beanie"];
const hatNames=["Keine","Hut","Cap","Mütze"];
const wormConfigs=Array.from({length:6},()=>({color:colors[0],hat:"none"}));
const configRoot=document.querySelector("#worm-configs");
for(let i=0;i<6;i++){
  const row=document.createElement("div");
  row.className="worm-config";
  row.dataset.index=i;
  row.innerHTML='<strong>Wurm '+(i+1)+'</strong><button type="button" data-config="color-prev">&lt;</button><span data-config="color"></span><button type="button" data-config="color-next">&gt;</button><button type="button" data-config="hat-prev">&lt;</button><span data-config="hat"></span><button type="button" data-config="hat-next">&gt;</button>';
  configRoot.appendChild(row);
  const refresh=()=>{const c=wormConfigs[i];row.querySelector('[data-config="color"]').textContent=c.color;row.querySelector('[data-config="color"]').style.color=c.color;row.querySelector('[data-config="hat"]').textContent=hatNames[hats.indexOf(c.hat)];};
  refresh();
  row.addEventListener("click",e=>{const action=e.target.dataset.config;if(!action)return;if(action.startsWith("color")){let n=colors.indexOf(wormConfigs[i].color)+(action.endsWith("next")?1:-1);n=(n+colors.length)%colors.length;wormConfigs[i].color=colors[n];}else{let n=hats.indexOf(wormConfigs[i].hat)+(action.endsWith("next")?1:-1);n=(n+hats.length)%hats.length;wormConfigs[i].hat=hats[n];}refresh();});
}

const game = new Game(canvas);
const ui = new UI(game);
const onlineScreen=document.querySelector("#online-screen");
const onlineStatus=document.querySelector("#online-status");
const onlineCode=document.querySelector("#online-code");
const onlineCodeDisplay=document.querySelector("#online-code-display");
const online=new OnlineClient({onStatus:s=>{if(onlineStatus)onlineStatus.textContent=s;},onMessage:msg=>{if(msg.type==="lobby:created"){onlineTeam=msg.team;onlineCodeDisplay.textContent="Lobby-Code: "+msg.code;}if(msg.type==="lobby:joined"){onlineTeam=msg.team;onlineCodeDisplay.textContent="Lobby-Code: "+msg.code;}if(msg.type==="match:start"){game.configureMode("online");game.configureOnline(onlineTeam??0);game.configureMap(msg.config.mapId);game.configureTeamSize(msg.config.teamSize);game.configureWorms(wormConfigs);ui.showGame();game.start();}if(msg.type==="turn")game.setRemoteTurn(msg.turn);}});

let selectedTeamSize = 1;
let selectedMode = "pc";
let selectedDifficulty = "normal";
let onlineTeam = null;
document.querySelectorAll("[data-difficulty]").forEach(button=>button.addEventListener("click",()=>{selectedDifficulty=button.dataset.difficulty;}));
let selectedMap = "meadow";
const mapPreview = document.querySelector("#map-preview");
document.querySelectorAll("[data-map]").forEach(button => button.addEventListener("click", () => { selectedMap = button.dataset.map; if(mapPreview) mapPreview.textContent = button.textContent; }));
document.querySelectorAll("[data-team-size]").forEach(button => button.addEventListener("click", () => { selectedTeamSize = Number(button.dataset.teamSize); }));

document.querySelector("#online-create").addEventListener("click",()=>online.createLobby());
document.querySelector("#online-join").addEventListener("click",()=>online.joinLobby(onlineCode.value));
document.querySelector("#online-start").addEventListener("click",()=>{online.configure({mapId:selectedMap,teamSize:selectedTeamSize});online.startMatch();});
document.querySelector("#online-back").addEventListener("click",()=>{onlineScreen.classList.add("is-hidden");ui.showMenu();});
document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "start-pc" || button.dataset.action === "start-local") {
      selectedMode = "pc";
      ui.showGame();
      game.configureMode("pc");
      game.configureDifficulty(selectedDifficulty);
      game.configureTeamSize(selectedTeamSize);
      game.configureMap(selectedMap);
      game.configureWorms(wormConfigs);
      game.start();
    } else if(button.dataset.action==="start-online"){ document.querySelector("#menu-screen").classList.add("is-hidden"); onlineScreen.classList.remove("is-hidden"); online.connect(); } else if(button.dataset.action==="settings"){ alert("Einstellungen folgen im Audio/UI-Polishing."); } else if(button.dataset.action==="credits"){ alert("Worms Arena – eigenständiges Browsergame."); }
  });
});
document.querySelector("#shoot-button").addEventListener("click", () => game.fire());
document.querySelector("#end-turn").addEventListener("click", () => game.endTurn());
document.querySelectorAll("[data-weapon]").forEach(button => button.addEventListener("click", () => game.selectWeapon(button.dataset.weapon)));
document.querySelector("#replay-button").addEventListener("click", () => { game.start(); });
document.querySelector("#back-menu").addEventListener("click", () => {
  game.stop();
  ui.showMenu();
});
ui.showMenu();
