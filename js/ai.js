import { Weapons } from "./weapons.js";

export class AIController {
  constructor(game,difficulty="normal"){this.game=game;this.difficulty=difficulty;}
  chooseWorm(){const alive=this.game.worms.filter(w=>w.alive&&w.team===1);return alive.sort((a,b)=>a.hp-b.hp)[0]||null;}
  chooseTarget(){const enemies=this.game.worms.filter(w=>w.alive&&w.team===0);return enemies[0]||null;}
  chooseWeapon(target){
    const d=Math.hypot(target.x-this.game.activeWorm.x,target.y-this.game.activeWorm.y);
    if(this.difficulty==="hard"&&d<180)return Weapons.dynamite;
    if(this.difficulty!=="easy"&&d<320)return Weapons.grenade;
    return Weapons.bazooka;
  }
  takeTurn(){
    const worm=this.chooseWorm(),target=this.chooseTarget();
    if(!worm||!target)return;
    this.game.setActiveWorm(worm);
    this.game.weapon=this.chooseWeapon(target);
    const dx=target.x-worm.x,dy=target.y-worm.y;
    const wind=this.game.wind*0.12;
    this.game.pointer={x:target.x+wind,y:target.y};
    if(this.difficulty==="easy")this.game.pointer.x+=60;
    if(this.difficulty==="hard")this.game.pointer.x-=wind*2;
    this.game.shotPower=this.difficulty==="hard"?0.75:0.62;
    this.game.fire();
  }
}
