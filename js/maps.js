const makeSurface=(width,height,seed=1,amplitude=1)=>{
  const surface=[]; let y=height*0.68;
  for(let x=0;x<width;x++){y+=Math.sin((x+seed)*0.018)*0.7*amplitude+Math.sin((x+seed)*0.043)*0.35*amplitude;y=Math.max(height*.42,Math.min(height*.82,y));surface.push(y);}
  return surface;
};
export const MAPS=Object.freeze([
{id:"meadow",name:"Grüne Hügel",width:960,height:540,color:"#5a8b42",sky:"#14233a",surface:makeSurface(960,540,4,1),spawns:[{x:140,y:100},{x:820,y:100}]},
{id:"canyon",name:"Roter Canyon",width:960,height:540,color:"#9a5b3b",sky:"#39201e",surface:makeSurface(960,540,17,1.5),spawns:[{x:120,y:100},{x:840,y:100}]},
{id:"frost",name:"Frosttal",width:960,height:540,color:"#b9d9e8",sky:"#1b3046",surface:makeSurface(960,540,31,.8),spawns:[{x:170,y:100},{x:790,y:100}]},
{id:"volcano",name:"Vulkaninsel",width:960,height:540,color:"#56362f",sky:"#2c151c",surface:makeSurface(960,540,51,1.8),spawns:[{x:110,y:100},{x:850,y:100}]}
]);
export function createMap(map){return {width:map.width,height:map.height,color:map.color,sky:map.sky,surface:map.surface.slice(),spawns:map.spawns.map(p=>({...p})),id:map.id,name:map.name};}
