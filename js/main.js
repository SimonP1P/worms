import { Game } from "./game.js";
import { UI } from "./ui.js";

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
let selectedTeamSize = 1;
let selectedMap = "meadow";
const mapPreview = document.querySelector("#map-preview");
document.querySelectorAll("[data-map]").forEach(button => button.addEventListener("click", () => { selectedMap = button.dataset.map; if(mapPreview) mapPreview.textContent = button.textContent; }));
document.querySelectorAll("[data-team-size]").forEach(button => button.addEventListener("click", () => { selectedTeamSize = Number(button.dataset.teamSize); }));

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "start-pc" || button.dataset.action === "start-local") {
      ui.showGame();
      game.configureTeamSize(selectedTeamSize);
      game.configureMap(selectedMap);
      game.configureWorms(wormConfigs);
      game.start();
    }
  });
});
document.querySelector("#end-turn").addEventListener("click", () => game.endTurn());
document.querySelectorAll("[data-weapon]").forEach(button => button.addEventListener("click", () => game.selectWeapon(button.dataset.weapon)));
document.querySelector("#back-menu").addEventListener("click", () => {
  game.stop();
  ui.showMenu();
});
ui.showMenu();
