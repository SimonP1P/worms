import { MAPS, createMap } from "../js/maps.js";
import { Weapons } from "../js/weapons.js";

const weaponById=id=>Weapons[id]||Weapons.bazooka;

export function createMatch(config={}){
  const map=createMap(MAPS.find(m=>m.id===config.mapId)||MAPS[0]);
  const teamSize=Math.max(1,Math.min(3,Number(config.teamSize)||1));
  const colors=["#7cf06b","#ff7c8a","#64b5ff","#ffd45a","#c98cff","#ff9f52"];
  const worms=[];
  for(let team=0;team<2;team++)for(let i=0;i<teamSize;i++){
    const cfg=config.worms?.[team*3+i]||{color:colors[team],hat:team===0?"hat":"cap"};
    const p=map.spawns[team];
    worms.push({id:team+"-"+i,x:p.x+(team?1:-1)*i*28,y:p.y,hp:100,team,alive:true,color:cfg.color,hat:cfg.hat,name:(team?"Rot ":"Grün ")+(i+1)});
  }
  return {mapId:map.id,map,teamSize,worms,terrain:map.surface.slice(),turn:0,activeWormId:"0-0",weapon:"bazooka",wind:(Math.random()*2-1)*12,state:"playing",winner:null};
}
function heightAt(state,x){return state.terrain[Math.max(0,Math.min(state.map.width-1,Math.floor(x)))]??state.map.height;}
function destroyTerrain(state,cx,cy,r){
  for(let x=Math.max(0,Math.floor(cx-r));x<=Math.min(state.map.width-1,Math.ceil(cx+r));x++){const dx=x-cx;if(Math.abs(dx)<=r){const cut=Math.sqrt(r*r-dx*dx);state.terrain[x]=Math.max(state.terrain[x],cy+cut);}}
}
function explode(state,x,y,weapon){
  destroyTerrain(state,x,y,weapon.explosionRadius);
  for(const w of state.worms){
    if(!w.alive)continue;
    const d=Math.hypot(w.x-x,w.y-y); if(d>=weapon.explosionRadius)continue;
    const factor=1-d/weapon.explosionRadius; w.hp=Math.max(0,w.hp-weapon.damage*factor);
    const push=factor*180; if(d>0){w.x+=((w.x-x)/d)*push*.04;w.y+=((w.y-y)/d)*push*.04;}
    if(w.hp<=0){w.alive=false;w.hp=0;}
    else w.y=Math.min(w.y,heightAt(state,w.x)-12);
  }
  const aliveTeams=[0,1].filter(team=>state.worms.some(w=>w.alive&&w.team===team));
  if(aliveTeams.length<=1){state.winner=aliveTeams.length===1?aliveTeams[0]:null;state.state="game-over";}
}
export function applyAction(state,team,action,payload={}){
  if(state.state!=="playing"||team!==state.turn)return {ok:false,error:"Nicht dein Zug"};
  if(action==="select_worm"){
    const w=state.worms.find(w=>(w.id===payload.wormId||w.name===payload.wormId)&&w.team===team&&w.alive);if(!w)return {ok:false,error:"Ungültiger Wurm"};state.activeWormId=w.id;return {ok:true};
  }
  if(action==="select_weapon"){if(!weaponById(payload.weapon))return {ok:false,error:"Ungültige Waffe"};state.weapon=payload.weapon;return {ok:true};}
  if(action==="fire"){
    const w=state.worms.find(w=>w.id===state.activeWormId&&w.team===team&&w.alive);if(!w)return {ok:false,error:"Kein aktiver Wurm"};
    const weapon=weaponById(payload.weapon||state.weapon);state.weapon=weapon.id;
    let impactX,impactY;
    if(weapon.id==="dynamite"){impactX=Math.max(8,Math.min(state.map.width-8,Number(payload.targetX)||w.x));impactY=heightAt(state,impactX)-8;}
    else{
      const angle=Number(payload.angle)||0,power=Math.max(.15,Math.min(1,Number(payload.power)||.5));
      let x=w.x,y=w.y-14,vx=Math.cos(angle)*(260+power*560),vy=Math.sin(angle)*(260+power*560);
      for(let t=0;t<10;t+=.016){vx+=state.wind*8*.016;vy+=420*weapon.gravity*.016;x+=vx*.016;y+=vy*.016;if(x<0||x>state.map.width||y>state.map.height||y>=heightAt(state,x)){impactX=Math.max(0,Math.min(state.map.width,x));impactY=Math.max(0,Math.min(state.map.height,y));break;}}
      impactX??=Math.max(0,Math.min(state.map.width,x));impactY??=Math.min(state.map.height,y);
    }
    const start={x:w.x,y:w.y-14}; explode(state,impactX,impactY,weapon); state.lastEvent={type:"shot",projectile:{start,impact:{x:impactX,y:impactY}},explosion:{x:impactX,y:impactY,radius:weapon.explosionRadius,weapon:weapon.id}};
    if(state.state==="playing"){state.turn=state.turn===0?1:0;state.wind=(Math.random()*2-1)*12;const next=state.worms.find(w=>w.alive&&w.team===state.turn);state.activeWormId=next?.id||null;}
    return {ok:true};
  }
  if(action==="turn:end"){state.turn=state.turn===0?1:0;const next=state.worms.find(w=>w.alive&&w.team===state.turn);state.activeWormId=next?.id||null;return {ok:true};}
  return {ok:false,error:"Unbekannte Aktion"};
}
export function snapshot(state){return {mapId:state.mapId,teamSize:state.teamSize,terrain:state.terrain,worms:state.worms,turn:state.turn,activeWormId:state.activeWormId,weapon:state.weapon,wind:state.wind,state:state.state,winner:state.winner,lastEvent:state.lastEvent};}
