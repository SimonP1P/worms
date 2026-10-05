import { Game } from "./game.js";
import { UI } from "./ui.js";

const canvas = document.querySelector("#game-canvas");
const game = new Game(canvas);
const ui = new UI(game);
let selectedTeamSize = 1;
let selectedMap = "meadow";
document.querySelectorAll("[data-map]").forEach(button => button.addEventListener("click", () => { selectedMap = button.dataset.map; }));
document.querySelectorAll("[data-team-size]").forEach(button => button.addEventListener("click", () => { selectedTeamSize = Number(button.dataset.teamSize); }));

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "start-pc" || button.dataset.action === "start-local") {
      ui.showGame();
      game.configureTeamSize(selectedTeamSize);
      game.configureMap(selectedMap);
      game.start();
    }
  });
});
document.querySelector("#end-turn").addEventListener("click", () => game.endTurn());
document.querySelectorAll("[data-weapon]").forEach(button => button.addEventListener("click", () => game.selectWeapon(button.dataset.weapon)));
document.querySelector("#back-menu").addEventListener("click", () => {
  game.stop();
  ui.showMenu();
});
ui.showMenu();
