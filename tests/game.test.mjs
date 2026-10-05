import assert from "node:assert/strict";
import test from "node:test";
import { createMatch, applyAction, snapshot } from "../server/match.js";

test("creates 1, 2 and 3 worms per team", () => {
  for (const teamSize of [1,2,3]) {
    const state=createMatch({teamSize});
    assert.equal(state.worms.length,teamSize*2);
    assert.equal(state.worms.filter(w=>w.team===0).length,teamSize);
    assert.equal(state.worms.filter(w=>w.team===1).length,teamSize);
  }
});

test("rejects actions from the wrong team", () => {
  const state=createMatch({teamSize:1});
  const result=applyAction(state,1,"fire",{angle:0,power:.5,weapon:"bazooka"});
  assert.equal(result.ok,false);
  assert.equal(state.turn,0);
});

test("rejects dead worm selection", () => {
  const state=createMatch({teamSize:2});
  state.worms[1].alive=false;
  const result=applyAction(state,0,"select_worm",{wormId:state.worms[1].id});
  assert.equal(result.ok,false);
});

test("turn changes only through valid turn action", () => {
  const state=createMatch({teamSize:1});
  assert.equal(state.turn,0);
  assert.equal(applyAction(state,0,"turn:end").ok,true);
  assert.equal(state.turn,1);
});

test("snapshot exposes synchronized match state", () => {
  const state=createMatch({teamSize:2});
  const view=snapshot(state);
  assert.equal(view.worms.length,4);
  assert.equal(view.terrain.length,state.map.width);
  assert.equal(view.turn,0);
  assert.equal(view.activeWormId,"0-0");
});


test("snapshot can represent a game with all worms eliminated", () => {
  const state=createMatch({teamSize:1});
  state.worms.forEach(w=>{w.alive=false;w.hp=0;});
  const view=snapshot(state);
  assert.equal(view.worms.every(w=>!w.alive),true);
});
