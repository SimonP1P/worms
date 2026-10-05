export class Projectile {
  constructor(x,y,vx,vy,weapon){this.x=x;this.y=y;this.vx=vx;this.vy=vy;this.weapon=weapon;this.alive=true;}
  update(dt,wind=0){this.vx+=wind*0.35*dt;this.vy+=this.weapon.gravity*dt;this.x+=this.vx*dt*60;this.y+=this.vy*dt*60;}
  outside(canvas){return this.x<-30||this.x>canvas.width+30||this.y>canvas.height+30||this.y<-100;}
  draw(ctx){ctx.fillStyle=this.weapon.color||"#f7f7f7";ctx.beginPath();ctx.arc(this.x,this.y,4,0,Math.PI*2);ctx.fill();}
}
