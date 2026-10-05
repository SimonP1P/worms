import { Worm } from "./worm.js";
import { Terrain } from "./terrain.js";
import { Projectile } from "./projectile.js";
import { Weapons } from "./weapons.js";
import { AIController } from "./ai.js";
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
    this.mapId = "meadow";
    this.wormConfigs = Array.from({length:6},()=>({color:"#7cf06b",hat:"none"}));
    this.mode = "pc";
    this.aiDifficulty = "normal";
    this.ai = new AIController(this,this.aiDifficulty);
    this.turnDuration = 20;
    this.turnRemaining = this.turnDuration;
    this.startTime = 0;
    this.matchDuration = 0;
    this.winnerTeam = null;
    this.onlineTeam = null;
    this.onlineClient = null;
    this.remoteEvent = null;
    this.audio = null;
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
  configureMap(id) { if(MAPS.some(m=>m.id===id)) this.mapId=id; }
  configureWorms(configs) { this.wormConfigs=configs.map(c=>({color:c.color,hat:c.hat})); }
  configureMode(mode) { this.mode=mode==="pc"?"pc":"local"; }
  configureOnline(team) { this.mode="online"; this.onlineTeam=team; }
  setOnlineClient(client) { this.onlineClient=client; }
  setAudio(audio) { this.audio=audio; }
  applyServerState(snapshot) {
    if(!snapshot)return;
    if(this.terrain && Array.isArray(snapshot.terrain)) this.terrain.surface=snapshot.terrain.slice();
    for(const remote of snapshot.worms||[]){const local=this.worms.find(w=>w.name===remote.name||w.team===remote.team&&w.name===remote.name);if(local){local.x=remote.x;local.y=remote.y;local.hp=remote.hp;local.alive=remote.alive;local.color=remote.color;local.hat=remote.hat;}}
    this.team=snapshot.turn; this.wind=snapshot.wind; if(snapshot.weapon && Weapons[snapshot.weapon])this.weapon=Weapons[snapshot.weapon]; this.state=snapshot.state==="game-over"?STATES.GAME_OVER:STATES.PLAYING;
    const active=this.worms.find(w=>w.alive&&w.team===snapshot.turn&&w.name===snapshot.worms.find(x=>x.id===snapshot.activeWormId)?.name); this.setActiveWorm(active||this.worms.find(w=>w.alive&&w.team===snapshot.turn)||null);
    if(snapshot.state==="game-over")this.winnerTeam=snapshot.winner;
  }
  setRemoteTurn(team) { this.team=team; const alive=this.worms.filter(w=>w.alive&&w.team===team); this.setActiveWorm(alive[0]||null); this.turnRemaining=this.turnDuration; this.state=STATES.PLAYING; }
  configureDifficulty(level) { this.aiDifficulty=["easy","normal","hard"].includes(level)?level:"normal"; this.ai=new AIController(this,this.aiDifficulty); }

  start() {
    this.state = STATES.LOADING;
    const map = createMap(MAPS.find(m=>m.id===this.mapId) || MAPS[0]);
    this.terrain = new Terrain(map);
    this.worms = [];
    const colors=[["#7cf06b","hat"],["#ff7c8a","cap"]];
    for(let team=0;team<2;team++){
      for(let i=0;i<this.teamSize;i++){
        const base=map.spawns[team];
        const cfg=this.wormConfigs[team*3+i]||{color:colors[team][0],hat:colors[team][1]}; this.worms.push(new Worm({x:base.x+(team?1:-1)*i*28,y:base.y,team,color:cfg.color,hat:cfg.hat,name:(team?"Rot ":"Grün ")+(i+1)}));
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
    if(this.mode==="online"){this.onlineClient?.endTurn();return;}
    this.state = STATES.TURN;
    this.team = this.team === 0 ? 1 : 0;
    const alive = this.worms.filter(w => w.alive && w.team === this.team);
    this.setActiveWorm(alive[0] || null);
    this.turn++;
    this.wind = (Math.random() * 2 - 1) * 12;
    this.turnRemaining = this.turnDuration;
    window.setTimeout(() => { if (this.state === STATES.TURN) { this.state = STATES.PLAYING; if(this.mode==="pc" && this.team===1) window.setTimeout(()=>this.ai.takeTurn(),250); } }, 300);
  }

  selectWorm(wormId) {
    const worm=this.worms.find(w=>w.name===wormId && w.alive && w.team===this.team);
    if(worm && this.state===STATES.PLAYING) { this.setActiveWorm(worm); if(this.mode==="online")this.onlineClient?.action("select_worm",{wormId:this.worms.find(x=>x===worm)?.name}); }
  }

  selectWeapon(id) {
    const weapon=Weapons[id];
    if(weapon && this.state===STATES.PLAYING) this.weapon=weapon;
  }

  fire() {
    if (!this.activeWorm || this.state !== STATES.PLAYING) return;
    if(this.mode==="online"){this.onlineClient?.action("fire",{angle:this.aimAngle,power:this.shotPower,weapon:this.weapon.id,targetX:this.pointer.x});return;}
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
    this.state = STATES.PROJECTILE; this.audio?.play("shoot");
  }

  update(dt) {
    if (this.state === STATES.PLAYING) { this.turnRemaining=Math.max(0,this.turnRemaining-dt); if(this.turnRemaining===0)this.endTurn(); }
    if (this.state === STATES.EXPLOSION && this.explosion) this.explosion.age += dt;
    if (this.mode==="online") return;
    if (this.state === STATES.PLAYING && this.activeWorm) {
      this.activeWorm.update(dt, this.terrain, this.keys);
    }
    if (this.state === STATES.PROJECTILE && this.projectile) {
      if(this.weapon.id==="dynamite"){ this.dynamiteTimer-=dt; if(this.dynamiteTimer<=0)this.resolveImpact(this.projectile.x,this.projectile.y); }
      else this.projectile.update(dt, this.wind);
      if (this.projectile && (this.projectile.outside(this.canvas) || this.terrain.collides(this.projectile.x,this.projectile.y))) {
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
    this.state = STATES.EXPLOSION; this.audio?.play("explosion");
    this.checkWinner();
    if (this.state !== STATES.GAME_OVER) setTimeout(() => this.endTurn(), 450);
  }

  checkWinner() {
    for (const team of [0,1]) {
      if (!this.worms.some(w => w.alive && w.team === team)) {
        this.state = STATES.GAME_OVER;
        this.winnerTeam = team === 0 ? 1 : 0;
        this.matchDuration = (performance.now()-this.startTime)/1000;
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
    if(this.mode==="online" && this.remoteEvent?.type==="shot"){const e=this.remoteEvent; c.save();c.strokeStyle="#fff8";c.setLineDash([4,5]);c.beginPath();c.moveTo(e.projectile.start.x,e.projectile.start.y);c.lineTo(e.projectile.impact.x,e.projectile.impact.y);c.stroke();c.setLineDash([]);c.strokeStyle="#ffcf5a";c.lineWidth=3;c.beginPath();c.arc(e.explosion.x,e.explosion.y,e.explosion.radius,0,Math.PI*2);c.stroke();c.restore();}
    if(this.state===STATES.TURN){ c.fillStyle="#0008"; c.fillRect(0,0,c.canvas.width,c.canvas.height); c.fillStyle="#fff"; c.font="28px sans-serif"; c.fillText("Team "+(this.team+1)+" ist dran",40,60); }
    if(this.explosion){ const p=Math.min(1,this.explosion.age/this.explosion.duration); c.save(); c.globalAlpha=1-p; c.fillStyle="#ffcf5a"; c.beginPath(); c.arc(this.explosion.x,this.explosion.y,this.explosion.radius*(0.45+0.55*p),0,Math.PI*2); c.fill(); c.restore(); if(p>=1)this.explosion=null; }
    if (this.state===STATES.PAUSED) { c.fillStyle="#0009"; c.fillRect(0,0,c.canvas.width,c.canvas.height); c.fillStyle="#fff"; c.font="32px sans-serif"; c.fillText("Pausiert",40,60); }
    if (this.state===STATES.GAME_OVER) { c.fillStyle="#0009"; c.fillRect(0,0,c.canvas.width,c.canvas.height); c.fillStyle="#fff"; c.font="32px sans-serif"; c.fillText(this.winnerText(),40,60); }
  }

  winnerText() {
    return this.winnerTeam===null ? "Unentschieden" : "Team "+(this.winnerTeam+1)+" gewinnt!";
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
