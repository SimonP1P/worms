import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

test("browser entrypoint contains every required UI hook", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  for (const id of [
    "menu-screen","online-screen","game-screen","game-canvas","worm-configs",
    "map-preview","audio-toggle","online-create","online-join","online-start",
    "online-back","shoot-button","end-turn","replay-button","back-menu",
    "hud-team","hud-worm","hud-hp","hud-wind","hud-weapon","hud-power","hud-status"
  ]) assert.match(html, new RegExp(`id=["']${id}["']`));
  assert.match(html, /import\(["']\.\/js\/main\.js\?v=\d+["']\)/);
});

test("all browser JavaScript modules pass Node syntax validation", () => {
  const files = [
    "js/main.js","js/game.js","js/ui.js","js/audio.js","js/online.js",
    "js/ai.js","js/maps.js","js/projectile.js","js/terrain.js","js/weapons.js","js/worm.js"
  ];
  for (const file of files) execFileSync(process.execPath, ["--check", file], {stdio:"pipe"});
});
