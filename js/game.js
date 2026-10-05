import { Worm } from "./worm.js";
import { Terrain } from "./terrain.js";
import { Projectile } from "./projectile.js";
import { Weapons } from "./weapons.js";
import { MAPS, createMap } from "./maps.js";

export const STATES = Object.freeze({
  MENU:"main-menu", SETUP:"game-setup", LOADING:"loading", PLAYING:"playing", PROJECTILE:"projectile-flying",
  EXPLOSION:"explosion", TURN:"turn-transition", GAME_OVER:"game-over", PAUSED:"paused"
});

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.state = STATES.MENU;
    this.running = false;
    this.lastTime = 0;
    this.wind = 0;
    this.turn = 0;
    this.team = 0;
    this.teamSize = 1;
    this.turnDuration = 20;
    this.turnRemaining = this.turnDuration;
    this.activeWorm = null;
    this.projectile = null;
    this.explosion = null;
    this.terrain = null;
    this.worms = [];
    this.weapon = Weapons.bazooka;
    this.dynamiteTimer = 0;
    this.shotPower = 0.5;
    this.aimAngle = 0;
    this.keys = new Set();
    this.pointer = { x: canvas.width / 2, y: canvas.height / 2 };
    this.bindInput();
  }

  bindInput() {
    window.addEventListener("keydown", e => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === "Escape") this.togglePause();
      if (e.key === "Enter" && this.state === STATES.PLAYING) this.fire();
    });
    window.addEventListener("keyup", e => this.keys.delete(e.key.toLowerCase()));
    this.canvas.addEventListener("pointermove", e => {
      const r = this.canvas.getBoundingClientRect();
      this.pointer.x = (e.clientX-r.left) * this.canvas.width/r.width;
      this.pointer.y = (e.clientY-r.top) * this.canvas.height/r.height;
      if(this.activeWorm){ const dx=this.pointer.x-this.activeWorm.x,dy=this.pointer.y-this.activeWorm.y; this.aimAngle=Math.atan2(dy,dx); this.shotPower=Math.max(0.15,Math.min(1,Math.hypot(dx,dy)/420)); }
    });
    this.canvas.addEventListener("wheel", e => { if(this.state===STATES.PLAYING){ e.preventDefault(); this.shotPower=Math.max(0.15,Math.min(1,this.shotPower+(e.deltaY<0?0.05:-0.05))); } }, {passive:false});
    this.canvas.addEventListener("pointerdown", () => { if (this.state === STATES.PLAYING) this.fire(); });
  }

  configureTeamSize(size) { this.teamSize = Math.max(1, Math.min(3, Number(size) || 1)); }

  start() {
    this.state = STATES.LOADING;
    const map = createMap(MAPS[0]);
    this.terrain = new Terrain(map);
    this.worms = [];
    const colors=[["#7cf06b","hat"],["#ff7c8a","cap"]];
    for(let team=0;team<2;team++){
      for(let i=0;i<this.teamSize;i++){
        const base=map.spawns[team];
        this.worms.push(new Worm({x:base.x+(team?1:-1)*i*28,y:base.y,team,color:colors[team][0],hat:colors[team][1],name:(team?"Rot ":"Grün ")+(i+1)}));
      }
    }
    this.wind = (Math.random() * 2 - 1) * 12;
    this.team = 0; this.turn = 1; this.turnRemaining = this.turnDuration; this.setActiveWorm(this.worms[0]);
    this.state = STATES.PLAYING;
    if (!this.running) { this.running = true; requestAnimationFrame(t => this.loop(t)); }
  }

  stop() { this.running = false; this.state = STATES.MENU; }

  togglePause() {
    if (!this.running || this.state === STATES.GAME_OVER) return;
    this.state = this.state === STATES.PAUSED ? STATES.PLAYING : STATES.PAUSED;
  }

  setActiveWorm(worm) {
    for (const item of this.worms) item.active = item === worm;
    this.activeWorm = worm || null;
  }

  endTurn() {
    if (this.state !== STATES.PLAYING) return;
    this.state = STATES.TURN;
    this.team = this.team === 0 ? 1 : 0;
    const alive = this.worms.filter(w => w.alive && w.team === this.team);
    this.setActiveWorm(alive[0] || null);
    this.turn++;
    this.wind = (Math.random() * 2 - 1) * 12;
    this.turnRemaining = this.turnDuration;
    window.setTimeout(() => { if (this.state === STATES.TURN) this.state = STATES.PLAYING; }, 300);
  }

  selectWorm(wormId) {
    const worm=this.worms.find(w=>w.name===wormId && w.alive && w.team===this.team);
    if(worm && this.state===STATES.PLAYING) this.setActiveWorm(worm);
  }

  selectWeapon(id) {
    const weapon=Weapons[id];
    if(weapon && this.state===STATES.PLAYING) this.weapon=weapon;
  }

  fire() {
    if (!this.activeWorm || this.state !== STATES.PLAYING) return;
    const dx = this.pointer.x - this.activeWorm.x;
    const dy = this.pointer.y - this.activeWorm.y;
    const length = Math.max(1, Math.hypot(dx,dy));
    if(this.weapon.id==="dynamite"){
      const x=Math.max(8,Math.min(this.canvas.width-8,this.pointer.x));
      const y=this.terrain.heightAt(x)-8;
      this.projectile=new Projectile(x,y,0,0,this.weapon); this.dynamiteTimer=this.weapon.countdown;
    } else {
      const speed = 260 + this.shotPower * 560;
      this.projectile = new Projectile(this.activeWorm.x, this.activeWorm.y-14, dx/length*speed, dy/length*speed, this.weapon);
    }
    this.state = STATES.PROJECTILE;
  }

  update(dt) {
    if (this.state === STATES.PLAYING) { this.turnRemaining=Math.max(0,this.turnRemaining-dt); if(this.turnRemaining===0)this.endTurn(); }
    if (this.state === STATES.EXPLOSION && this.explosion) this.explosion.age += dt;
    if (this.state === STATES.PLAYING && this.activeWorm) {
      this.activeWorm.update(dt, this.terrain, this.keys);
    }
    if (this.state === STATES.PROJECTILE && this.projectile) {
      if(this.weapon.id==="dynamite"){ this.dynamiteTimer-=dt; if(this.dynamiteTimer<=0)this.resolveImpact(this.projectile.x,this.projectile.y); }
      else this.projectile.update(dt, this.wind);
      if (this.projectile.outside(this.canvas) || this.terrain.collides(this.projectile.x,this.projectile.y)) {
        this.resolveImpact(this.projectile.x,this.projectile.y);
      }
    }
  }

  resolveImpact(x,y) {
    const radius = this.projectile.weapon.explosionRadius;
    this.terrain.destroyCircle(x,y,radius);
    for (const worm of this.worms) { worm.applyExplosion(x,y,this.projectile.weapon.damage,radius); if(worm.alive)this.terrain.settleEntity(worm); }
    this.explosion = {x,y,radius,age:0,duration:0.35};
    this.projectile = null;
    this.state = STATES.EXPLOSION;
    this.checkWinner();
    if (this.state !== STATES.GAME_OVER) setTimeout(() => this.endTurn(), 450);
  }

  checkWinner() {
    for (const team of [0,1]) {
      if (!this.worms.some(w => w.alive && w.team === team)) {
        this.state = STATES.GAME_OVER;
        this.running = true;
      }
    }
  }

  render() {
    const c=this.ctx;
    c.clearRect(0,0,this.canvas.width,this.canvas.height);
    c.fillStyle="#14233a"; c.fillRect(0,0,this.canvas.width,this.canvas.height);
    this.terrain?.draw(c);
    for (const w of this.worms) w.draw(c, w===this.activeWorm);
    if(this.state===STATES.PLAYING && this.activeWorm){ c.save(); c.strokeStyle="#fff"; c.lineWidth=2; c.setLineDash([6,5]); c.beginPath(); c.moveTo(this.activeWorm.x,this.activeWorm.y-8); c.lineTo(this.activeWorm.x+Math.cos(this.aimAngle)*90,this.activeWorm.y-8+Math.sin(this.aimAngle)*90); c.stroke(); c.restore(); }
    this.projectile?.draw(c);
    if(this.explosion){ const p=Math.min(1,this.explosion.age/this.explosion.duration); c.save(); c.globalAlpha=1-p; c.fillStyle="#ffcf5a"; c.beginPath(); c.arc(this.explosion.x,this.explosion.y,this.explosion.radius*(0.45+0.55*p),0,Math.PI*2); c.fill(); c.restore(); if(p>=1)this.explosion=null; }
    if (this.state===STATES.PAUSED) { c.fillStyle="#0009"; c.fillRect(0,0,c.canvas.width,c.canvas.height); c.fillStyle="#fff"; c.font="32px sans-serif"; c.fillText("Pausiert",40,60); }
    if (this.state===STATES.GAME_OVER) { c.fillStyle="#0009"; c.fillRect(0,0,c.canvas.width,c.canvas.height); c.fillStyle="#fff"; c.font="32px sans-serif"; c.fillText(this.winnerText(),40,60); }
  }

  winnerText() {
    const winner=this.worms.find(w=>w.alive)?.team;
    return winner===undefined ? "Unentschieden" : `Team ${winner+1} gewinnt!`;
  }

  loop(time) {
    if (!this.running) return;
    const dt=Math.min(0.033,(time-this.lastTime)/1000 || 0);
    this.lastTime=time;
    if (this.state!==STATES.PAUSED && this.state!==STATES.GAME_OVER) this.update(dt);
    this.render();
    requestAnimationFrame(t=>this.loop(t));
  }
}
