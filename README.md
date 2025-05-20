# Matts Foundry Content
A collection of custom items and automation for DnD 5e games in Foundry: VTT.

These items are primarily homebrew, could be completely game-breaking, and probably don't make sense out of context of the game for which they were developed.  Bottom line, they are not meant for third-party use.  Feel free to use code, but there is no guarantee that it's maintained with compatibility in mind, and frankly, most of it is probably done poorly anyway; I'm not anywhere close to an expert in the Foundry API, Javascript, HTML, or CSS.

Licensed content will not be included here either; items with descriptions will typically be only the homebrew items (the focus here is automation).

# Dependencies
Currently, we target Foundry v12, and Dnd 5e System v4.

There are a number of modules which are required for this module to function:

- Midi QoL
- Midi Item Community Showcase (MISC)
- Gambit's Premades (GPS)
- Cauldron of Plentiful Resources (CPR), formerly Chris's Premades
- Dnd Beyond Importer (DDBI)
- Dynamic Active Effects (DAE)
- Times Up

# Content Overview
This module contains primarily two compendiums:

- **Matt's Homebrew:** Contains homebrew items, spells, class features, etc.  Meant to be used as a CPR automation source (below CPR, GPS, and MISC in priority).  As well, it should be set as the DDB Importer Overrides compendium.  Items from this compendium can generally be used by players as-is without an issue.
- **Matt's Homebrew (Automation Only):** Contains _automation items_ for items, spells, class features, etc.  The items in here are for _automation only_, and generally should not be used by players (in fact, this compendium is hidden from players by default).  It should be set as a CPR automation source (above CPR, GPS, and MISC in priority), however it should NOT be an override compendium for DDBI.

# Known Limitations
- Harness Divine Power will require tweaking after it is placed on characters by DDBI; you need to change its consumption manually to include a Channel Divinity charge.  This is due to a combination of:
    - DDBI doesn't import channel divinity properly (no charges)
    - Custom subclasses don't have channel divinities that map to the same id as the main one

In the future, a "post-import" automation script may be written to mitigate some of this.