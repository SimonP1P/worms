const makeSurface=(width,height,seed=1)=>{
  const surface=[]; let y=height*0.68;
  for(let x=0;x<width;x++){y+=Math.sin((x+seed)*0.018)*0.7+Math.sin((x+seed)*0.043)*0.35;y=Math.max(height*.42,Math.min(height*.82,y));surface.push(y);}
  return surface;
};
export const MAPS=Object.freeze([{id:"meadow",name:"Grüne Hügel",width:960,height:540,color:"#5a8b42",sky:"#14233a",surface:makeSurface(960,540,4),spawns:[{x:140,y:100},{x:820,y:100}]}]);
export function createMap(map){return {width:map.width,height:map.height,color:map.color,sky:map.sky,surface:map.surface.slice(),spawns:map.spawns.map(p=>({...p}))};}
