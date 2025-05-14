import { automationRegistry } from "./automations/index.js";

Hooks.once("ready", async function () {
  game.mfc = game.mfc || {};

  game.mfc = {
    ...game.mfc,
    ...automationRegistry,
  };
});
