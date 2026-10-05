export class UI {
  constructor(game) {
    this.game=game;
    this.menu=document.querySelector("#menu-screen");
    this.screen=document.querySelector("#game-screen");
    this.team=document.querySelector("#hud-team");
    this.worm=document.querySelector("#hud-worm");
    this.hp=document.querySelector("#hud-hp");
    this.wind=document.querySelector("#hud-wind");
    this.weapon=document.querySelector("#hud-weapon");
    this.power=document.querySelector("#hud-power");
    this.status=document.querySelector("#hud-status");
    this.gameOver=document.querySelector("#game-over-panel");
    this.resultTitle=document.querySelector("#result-title");
    this.resultDuration=document.querySelector("#result-duration");
    this.wormSelection=document.querySelector("#worm-selection");
    window.setInterval(()=>this.refresh(),100);
  }
  showMenu(){this.menu.classList.remove("is-hidden");this.screen.classList.add("is-hidden");}
  showGame(){this.menu.classList.add("is-hidden");this.screen.classList.remove("is-hidden");}
  refresh(){
    const g=this.game,w=g.activeWorm;
    this.team.textContent=w?"Team "+(w.team+1):"—";
    this.worm.textContent=w?w.name:"—";
    this.hp.textContent=w?String(Math.max(0,Math.round(w.hp))):"—";
    this.wind.textContent=g.wind.toFixed(1);
    const canAct=g.mode!=="online"||g.onlineTeam===g.team;
    this.weapon.textContent=g.weapon?.name||"—";
    this.power.textContent=Math.round(g.shotPower*100)+"%";
    this.status.textContent=g.state+" · "+Math.ceil(g.turnRemaining)+"s";
    if(g.state==="game-over"){this.gameOver.classList.remove("is-hidden");this.resultTitle.textContent=g.winnerText();this.resultDuration.textContent="Matchdauer: "+g.matchDuration.toFixed(1)+" s";}else{this.gameOver.classList.add("is-hidden");}
    document.querySelectorAll("[data-weapon]").forEach(b=>{b.setAttribute("aria-pressed",String(b.dataset.weapon===g.weapon?.id));b.disabled=!canAct;});
    const shoot=document.querySelector("#shoot-button"),end=document.querySelector("#end-turn");if(shoot)shoot.disabled=!canAct;if(end)end.disabled=!canAct;
    this.renderWormSelection();
  }
  renderWormSelection(){
    if(!this.wormSelection)return;
    this.wormSelection.replaceChildren();
    for(const w of this.game.worms.filter(x=>x.team===this.game.team)){
      const b=document.createElement("button"); b.type="button"; b.textContent=w.name+(w.alive?"":" (ausgeschieden)"); b.disabled=!w.alive || this.game.state!=="playing";
      if(w===this.game.activeWorm)b.setAttribute("aria-pressed","true");
      b.addEventListener("click",()=>this.game.selectWorm(w.name)); this.wormSelection.appendChild(b);
    }
  }
}
