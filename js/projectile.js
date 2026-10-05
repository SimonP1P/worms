export class Projectile {
  constructor(x,y,vx,vy,weapon){this.x=x;this.y=y;this.vx=vx;this.vy=vy;this.weapon=weapon;this.alive=true;}
  update(dt,wind=0){this.vx+=wind*8*dt;this.vy+=420*this.weapon.gravity*dt;this.x+=this.vx*dt;this.y+=this.vy*dt;}
  outside(canvas){return this.x<-30||this.x>canvas.width+30||this.y>canvas.height+30||this.y<-100;}
  draw(ctx){ctx.fillStyle=this.weapon.color||"#f7f7f7";ctx.beginPath();ctx.arc(this.x,this.y,4,0,Math.PI*2);ctx.fill();}
}
