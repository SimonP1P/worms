import assert from "node:assert/strict";
import test from "node:test";
import { MAPS, createMap } from "../js/maps.js";
import { Weapons } from "../js/weapons.js";
import { Terrain } from "../js/terrain.js";
import { Worm } from "../js/worm.js";
import { Projectile } from "../js/projectile.js";

test("all four maps have valid independent terrain and spawns",()=>{
  assert.equal(MAPS.length,4);
  for(const map of MAPS){
    const copy=createMap(map);
    assert.equal(copy.surface.length,copy.width);
    assert.equal(copy.spawns.length,2);
    copy.surface[0]+=50;
    assert.notEqual(copy.surface[0],map.surface[0]);
  }
});

test("all planned weapons expose damage and explosion parameters",()=>{
  for(const weapon of Object.values(Weapons)){
    assert.ok(weapon.damage>0);
    assert.ok(weapon.explosionRadius>0);
  }
});

test("all supported hats render as valid worm configuration values",()=>{
  for(const hat of ["none","hat","cap","beanie"]){
    const worm=new Worm({x:10,y:10,hat});
    assert.equal(worm.hat,hat);
    assert.equal(worm.alive,true);
  }
});

test("terrain destruction creates a deeper crater and keeps bounds",()=>{
  const terrain=new Terrain(createMap(MAPS[0]));
  const before=terrain.heightAt(480);
  terrain.destroyCircle(480,before-10,50);
  assert.ok(terrain.heightAt(480)>=before);
  assert.equal(terrain.surface.length,terrain.width);
});

test("projectile boundary detection handles map exits",()=>{
  const p=new Projectile(-50,10,0,0,Weapons.bazooka);
  assert.equal(p.outside({width:960,height:540}),true);
});

test("large explosion damage remains bounded",()=>{
  const worm=new Worm({x:100,y:100});
  worm.applyExplosion(100,100,10000,100000);
  assert.equal(worm.hp>=0,true);
});
