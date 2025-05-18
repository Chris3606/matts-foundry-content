import { itemMacros } from "./items/_index.js";
import { spellMacros } from "./spells/_index.js";

export const automationRegistry = {
  ...itemMacros,
  ...spellMacros,
};
