export class Worm {
  constructor({x,y,team=0,color="#7cf06b",hat="none",name="Wurm"}) {
    this.x=x;this.y=y;this.vx=0;this.vy=0;this.team=team;this.color=color;this.hat=hat;this.name=name;this.hp=100;this.alive=true;this.active=false;this.radius=12;this.walkPhase=0;this.hitTimer=0;
  }
  update(dt,terrain,keys){
    if(!this.alive)return;
    const left=keys.has("a")||keys.has("arrowleft"), right=keys.has("d")||keys.has("arrowright");
    this.vx=(right?1:0)-(left?1:0); this.vx*=70;
    if((keys.has("w")||keys.has("arrowup")||keys.has(" "))&&terrain.isGrounded(this.x,this.y,this.radius)) this.vy=-190;
    this.walkPhase+=Math.abs(this.vx)*dt*.08; this.hitTimer=Math.max(0,this.hitTimer-dt); this.vy+=480*dt; this.x+=this.vx*dt; this.y+=this.vy*dt;
    this.x=Math.max(this.radius,Math.min(terrain.width-this.radius,this.x));
    const ground=terrain.heightAt(this.x)-this.radius;
    if(this.y>ground){this.y=ground;this.vy=0;}
  }
  applyExplosion(x,y,damage,radius){
    if(!this.alive)return;
    const d=Math.hypot(this.x-x,this.y-y);
    if(d>=radius)return;
    const factor=1-d/radius;
    this.hp-=damage*factor; this.hitTimer=.18;
    const push=Math.max(0,1-d/radius)*180;
    if(d>0){this.vx+=(this.x-x)/d*push;this.vy+=(this.y-y)/d*push;}
    if(this.hp<=0){this.hp=0;this.alive=false;}
  }
  draw(ctx,active=false){
    if(!this.alive){ctx.save();ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(this.x-7,this.y-7);ctx.lineTo(this.x+7,this.y+7);ctx.moveTo(this.x+7,this.y-7);ctx.lineTo(this.x-7,this.y+7);ctx.stroke();ctx.restore();return;}
    ctx.save();ctx.translate(this.x,this.y+Math.sin(this.walkPhase)*2);
    ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(0,0,this.radius,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(-4,-3,3,0,Math.PI*2);ctx.arc(4,-3,3,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#111";ctx.beginPath();ctx.arc(-4,-3,1.4,0,Math.PI*2);ctx.arc(4,-3,1.4,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle="#111";ctx.lineWidth=2;ctx.stroke();
    if(this.hat==="hat"){ctx.fillStyle="#a86b32";ctx.fillRect(-10,-15,20,5);ctx.fillRect(-6,-25,12,10);}
    if(this.hat==="cap"){ctx.fillStyle="#3d7cff";ctx.fillRect(-9,-19,14,7);ctx.fillRect(4,-14,9,3);}
    if(this.hat==="beanie"){ctx.fillStyle="#e85d75";ctx.beginPath();ctx.arc(0,-14,9,Math.PI,0);ctx.fill();}
    if(this.hitTimer>0){ctx.strokeStyle="#ffdf8a";ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,16,0,Math.PI*2);ctx.stroke();}
    if(active){ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,17,0,Math.PI*2);ctx.stroke();}
    ctx.restore();
  }
}
