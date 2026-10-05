export class AIController {
  constructor(game,difficulty="normal"){this.game=game;this.difficulty=difficulty;}
  chooseWorm(){return this.game.worms.find(w=>w.alive&&w.team===1)||null;}
  chooseTarget(){return this.game.worms.find(w=>w.alive&&w.team===0)||null;}
  chooseWeapon(){return this.game.weapon;}
  takeTurn(){
    const worm=this.chooseWorm(),target=this.chooseTarget();
    if(!worm||!target)return;
    this.game.activeWorm=worm;
    const dx=target.x-worm.x,dy=target.y-worm.y;
    this.game.pointer={x:target.x,y:target.y};
    if(this.difficulty==="easy")this.game.pointer.x+=60;
    this.game.fire();
  }
}
