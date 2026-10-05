import { Worm } from "./worm.js";
import { Terrain } from "./terrain.js";
import { Projectile } from "./projectile.js";
import { Weapons } from "./weapons.js";
import { MAPS, createMap } from "./maps.js";

export const STATES = Object.freeze({
  MENU:"main-menu", SETUP:"game-setup", PLAYING:"playing", PROJECTILE:"projectile-flying",
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
    this.activeWorm = null;
    this.projectile = null;
    this.terrain = null;
    this.worms = [];
    this.weapon = Weapons.bazooka;
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
    });
    this.canvas.addEventListener("pointerdown", () => { if (this.state === STATES.PLAYING) this.fire(); });
  }

  start() {
    this.state = STATES.SETUP;
    this.terrain = new Terrain(createMap(MAPS[0]));
    this.worms = [
      new Worm({x:140,y:120,team:0,color:"#7cf06b",hat:"hat"}),
      new Worm({x:820,y:120,team:1,color:"#ff7c8a",hat:"cap"})
    ];
    this.wind = (Math.random() * 2 - 1) * 12;
    this.team = 0; this.turn = 1; this.activeWorm = this.worms[0];
    this.state = STATES.PLAYING;
    if (!this.running) { this.running = true; requestAnimationFrame(t => this.loop(t)); }
  }

  stop() { this.running = false; this.state = STATES.MENU; }

  togglePause() {
    if (!this.running || this.state === STATES.GAME_OVER) return;
    this.state = this.state === STATES.PAUSED ? STATES.PLAYING : STATES.PAUSED;
  }

  endTurn() {
    if (this.state !== STATES.PLAYING) return;
    this.team = this.team === 0 ? 1 : 0;
    const alive = this.worms.filter(w => w.alive && w.team === this.team);
    this.activeWorm = alive[0] || null;
    this.turn++;
    this.wind = (Math.random() * 2 - 1) * 12;
    this.state = STATES.PLAYING;
  }

  fire() {
    if (!this.activeWorm || this.state !== STATES.PLAYING) return;
    const dx = this.pointer.x - this.activeWorm.x;
    const dy = this.pointer.y - this.activeWorm.y;
    const length = Math.max(1, Math.hypot(dx,dy));
    const speed = Math.min(16, Math.max(7, length * 0.035));
    this.projectile = new Projectile(this.activeWorm.x, this.activeWorm.y-14, dx/length*speed, dy/length*speed, this.weapon);
    this.state = STATES.PROJECTILE;
  }

  update(dt) {
    if (this.state === STATES.PLAYING && this.activeWorm) {
      this.activeWorm.update(dt, this.terrain, this.keys);
    }
    if (this.state === STATES.PROJECTILE && this.projectile) {
      this.projectile.update(dt, this.wind);
      if (this.projectile.outside(this.canvas) || this.terrain.collides(this.projectile.x,this.projectile.y)) {
        this.resolveImpact(this.projectile.x,this.projectile.y);
      }
    }
  }

  resolveImpact(x,y) {
    const radius = this.projectile.weapon.explosionRadius;
    this.terrain.destroyCircle(x,y,radius);
    for (const worm of this.worms) worm.applyExplosion(x,y,this.projectile.weapon.damage,radius);
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
    this.projectile?.draw(c);
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
