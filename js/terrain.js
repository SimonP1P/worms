export class Terrain {
  constructor(map){
    this.width=map.width;this.height=map.height;this.surface=map.surface.slice();this.color=map.color||"#5a8b42";this.sky=map.sky||"#14233a";
  }
  heightAt(x){const i=Math.max(0,Math.min(this.width-1,Math.floor(x)));return this.surface[i]??this.height;}
  isGrounded(x,y,r=12){return y>=this.heightAt(x)-r-2;}
  collides(x,y){return y>=this.heightAt(x);}
  destroyCircle(cx,cy,r){
    const min=Math.max(0,Math.floor(cx-r)),max=Math.min(this.width-1,Math.ceil(cx+r));
    for(let x=min;x<=max;x++){const dx=x-cx;if(Math.abs(dx)<=r){const cut=Math.sqrt(r*r-dx*dx);this.surface[x]=Math.max(this.surface[x],cy+cut);}}
  }
  draw(ctx){
    const g=ctx.createLinearGradient(0,0,0,this.height);g.addColorStop(0,this.sky);g.addColorStop(1,"#28415b");ctx.fillStyle=g;ctx.fillRect(0,0,this.width,this.height);
    ctx.fillStyle=this.color;ctx.beginPath();ctx.moveTo(0,this.height);ctx.lineTo(0,this.heightAt(0));
    for(let x=1;x<this.width;x++)ctx.lineTo(x,this.heightAt(x));
    ctx.lineTo(this.width,this.height);ctx.closePath();ctx.fill();
    ctx.fillStyle="#77a94f";ctx.fillRect(0,Math.min(...this.surface)-2,this.width,3);
  }
}
