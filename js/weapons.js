export const BALANCE=Object.freeze({wormHP:100,minWind:-12,maxWind:12,minShotPower:.15,maxShotPower:1});

export const Weapons=Object.freeze({
  bazooka:Object.freeze({id:"bazooka",name:"Bazooka",damage:55,explosionRadius:52,gravity:0.22,color:"#ffd45a"}),
  grenade:Object.freeze({id:"grenade",name:"Granate",damage:70,explosionRadius:62,gravity:0.38,color:"#a7b0ba"}),
  dynamite:Object.freeze({id:"dynamite",name:"Dynamit",damage:95,explosionRadius:82,gravity:0.45,color:"#e56b5d",countdown:2})
});
export function weaponList(){return Object.values(Weapons);}
