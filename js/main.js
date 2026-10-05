import { Game } from "./game.js";
import { UI } from "./ui.js";

const canvas = document.querySelector("#game-canvas");
const game = new Game(canvas);
const ui = new UI(game);

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "start-pc" || button.dataset.action === "start-local") {
      ui.showGame();
      game.start();
    }
  });
});
document.querySelector("#end-turn").addEventListener("click", () => game.endTurn());
document.querySelector("#back-menu").addEventListener("click", () => {
  game.stop();
  ui.showMenu();
});
ui.showMenu();
