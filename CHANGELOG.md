# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

#### Items

- [Basic Weapons](https://modrinth.com/mod/basicweapons) support for several modded steel types (#226):
  - [Immersive Engineering](https://modrinth.com/mod/immersiveengineering) Steel;
  - [Twilight Forest](https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest) Knightmetal (courtesy of d9) and others TBA;
  - [Undergarden](https://modrinth.com/mod/the-undergarden) Cloggrum, Froststeel, Utherium, and Forgotten Metal.

#### Mods

- [Better Combat](https://modrinth.com/mod/better-combat)

### Changed

- Some loot tables (#77):
  - Abandoned Mineshaft (finished up);
  - Buried Treasure;
  - [Enderscape](https://modrinth.com/mod/enderscape) Mirestone Ruins.
- Added multiple Curios belt slots so you can use multiple such items at once (#251)
- Added flatness checks for many structures (#270)
- holistically assigned village types to biomes (#271)
- [Measurements](https://modrinth.com/mod/measurements) measuring tape recipe now requires Gold instead of Nickel (#273)
- [Vanilla Backport](https://modrinth.com/mod/vanillabackport) dyed bundles and [Sophisticated Storage](https://modrinth.com/mod/sophisticated-storage) upgraded shulker boxes now support [Easy Shulker Box]() mechanics (#274)
- made base upgrade templates for [Sophisticated Backpacks](https://modrinth.com/mod/sophisticated-backpacks) and [Sophisticated Storage](https://modrinth.com/mod/sophisticated-storage) cheaper (#275)
- disabled [Dungeons and Taverns](https://modrinth.com/mod/dungeons-and-taverns) Firewatch Towers and [Towns and Towers](https://modrinth.com/mod/towns-and-towers) Wandering Villager Camps to reduce structure clutter (#278)
- disabled [Dungeons and Taverns](https://modrinth.com/mod/dungeons-and-taverns) Swamp Villages as the witches all got stuck in cobwebs anyway (#278)
- substantially nerfed the [Immersive Engineering](https://modrinth.com/mod/immersiveengineering) ersatz leather recipe (#280)
- Hid [Farmer's Delight](https://modrinth.com/mod/farmers-delight) rope (removed as part of #236) from the `#c:ropes` and `#supplementaries:ropes` tags (#281)
- Flying mobs ([Fowl Play](https://modrinth.com/mod/fowlplay) birds and [Critters & Companions](https://modrinth.com/mod/critters-and-companions) dragonflies) can no longer mount ships (#283)
- can now craft ����� from 6 ��� ����� to make the [elevator](https://modrinth.com/mod/elevatormod) crafting tree less annoying (#286)
- Various modifications to the ALI config for loot table debug purposes

## [0.8.0+1.21.1] - 2025-12-19

### Added

#### Mods

- [Create: Vibrant Vaults](https://modrinth.com/mod/create-vibrant-vaults) (#231)
- [Create: Interiors](https://modrinth.com/mod/interiors), [Shelves](https://modrinth.com/mod/shelf-mod), [Unusual Furniture](https://modrinth.com/mod/unusual-furniture) (#232)
- [Neruina](https://modrinth.com/mod/neruina), since the previous world was killed by a ticking entity
- [Concurrent Chunk Management Engine](https://modrinth.com/mod/c2me-neoforge) (73355bd)

#### Recipes

- Dyeing recipes for elevators (#166)
- crafting recipes for [Biomes o' Plenty](https://modrinth.com/mod/biomes-o-plenty) null End blocks (#175)
- bulk concrete coloring (#170)
- Ending recipes for pearls (#180)
- Ending recipe for Slime Blocks into Drift Jelly blocks (#182)
- improved Magnia Sprout recipe (#186)
- Lumisene recipe now uses acetaldehyde instead of creosote (#187)
- less annoying Black Sand crafting recipe (#188)
- cheaper recipes for [Create](https://modrinth.com/mod/create) rose quartz using Redstone Acid (#189)
- quicklime from limestone (#198)
- Create mixing Redstone Acid (#211)
- Concrete production in [Create](https://modrinth.com/mod/create) blocks (#228)
- bundle dyeing recipes (#246)
- Ryo's Recipe (#249)
- paprika (#255)
- Rose Quartz crushing in [Create](https://modrinth.com/mod/create) crusher (#258)
- quiver recycling (#261)
- treated wooden walkways (#265)
- mixing Fiberboard and Paper (c37b30d)

### Changed

#### Recipes
- [Generator Galore](https://modrinth.com/mod/generatorgalore) (#64) - see 55a016f for details
- washing Zinc produces sulfur instead of gunpowder (#137)
- [Sophisticated Backpacks](https://modrinth.com/mod/sophisticated-backpacks) magnet upgrade (#202)
- various [Sophisticated Backpacks](https://modrinth.com/mod/sophisticated-backpacks) and [Sophisticated Storage](https://modrinth.com/mod/sophisticated-storage) recipes (#203)
- [Building Gadgets](https://www.curseforge.com/minecraft/mc-mods/building-gadgets) (#206)
- [Tom's Simple Storage](https://modrinth.com/mod/toms-storage) (#207)
- [Structure Compass](https://modrinth.com/mod/structure-compass) (#268)

#### Other

- [Advanced Loot Info](https://modrinth.com/mod/advanced-loot-info) EMI categories are temporarily broken down by structure as part of my ongoing effort (#77) to tweak all of the loot tables in the game
- adjusted Plains Village and Abandoned Mineshaft loot tables as a test of my process for #77
- [Chat Notify](https://modrinth.com/mod/chatnotify) configs, so they now highlight your username instead of `d9_m_5` (#130)
- readded [Supplementaries](https://modrinth.com/mod/supplementaries) ash, now it and [Enchanted]() wood ash share tags and therefore recipes (#149)
- added some missing books to the `#minecraft:bookshelf_books` tag (#160)
- added a tooltip to Tripwire Hooks explaining how to use them as tool hooks (#232)
- miscellaneous structure spawn settings (#248)
- can now use the monocle from [Horse Expert](https://modrinth.com/mod/horse-expert) on untamed horses (#250)
- [Guard Villagers](https://modrinth.com/mod/guard-villagers) can now spawn with Spears and Glaives from [Basic Weapons](https://modrinth.com/mod/basicweapons) and Steel Swords from [Immersive Engineering](https://modrinth.com/mod/immersiveengineering) (#253)
- slingshots can now throw more items (#257)
- increased tree size threshold for treecapitation from 200 to 500 (#259)
- [WATUT](https://modrinth.com/mod/what-are-they-up-to) no longer shows item transfers between players and chests, which was just kinda annoying (#264)
- reduced durability damage taken by [Guard Villager](https://modrinth.com/mod/guard-villagers) equipment (1bae399)
- washing Wither Rose now produces a [Biomes O' Plenty](https://modrinth.com/mod/biomes-o-plenty) Rose instead of a vanilla Poppy (afa0e69)
- can now use dyes on blackboards (afa0e69)
- can now place timber frames over blocks (afa0e69)
- updated various mods (4867294, 1bae399, 466b339)

### Removed

#### Mods
- Beautify (#163)
- Storage Drawers (#176)
- FastBoot (#209)
- Bibliocraft (#232)
- Eternal Starlight (#234)
- Create: Nuclear (#241)
- Explore Ruins: Aether (#245)
- Dungeons and Taverns: Nether Fortress Overhaul (#248)

#### Items
- many duplicate items from [Create Crafts & Additions]() (#178)
- Rope from [Farmer's Delight]() (#236)
- Copper and Iron Sheet Metal from [Create Deco]() (1ae9fe9)
- Zinc sheet from [Create Deco]() (#239)
- Lava Chicken disc from killing Chicken Jockeys
- Supplementaries lapis bricks (afa0e69)
- new duplicate Supplementaries spider head (afa0e69)
- Supplementaries barnacles (9422882)

## [0.7.36+1.21.1] - 2025-12-06

### Added
- [Basic Weapons](https://modrinth.com/mod/basicweapons), for basic weapons like hammers and spears
- [Building Gadgets](https://www.curseforge.com/minecraft/mc-mods/building-gadgets), to replace wands
- [Create Deco](https://modrinth.com/mod/create-deco), for warning signs mostly
- [Create: Nuclear](https://modrinth.com/mod/createnuclear), for BD
- [Create: Transmission!](https://legacy.curseforge.com/minecraft/mc-mods/create-transmission), for less annoying conveyor belts
- [Default Options](https://modrinth.com/mod/default-options), for shipping a sane set of keybinds (to be implemented later)
- [Display Notches](https://modrinth.com/mod/display-notches), for displaying non-vanilla shields
- [FramedBlocks](https://modrinth.com/mod/framedblocks), because somehow Copycats+ adds slopes but not corner slopes
- [Petrol's Parts](https://modrinth.com/mod/petrols-parts): technically readded after it lagged behind other Create addons in updating to support the annoyingly breaking version 6.0.6
- [Petrolpark's Library](https://modrinth.com/mod/petrolpark): library for Petrol's Parts
- [Showcase Item](https://modrinth.com/mod/showcase-item), for easier communication with other players
- [Sophisticated Storage Create Integration](https://modrinth.com/mod/sophisticated-storage-create-integration), for putting magnetic chests on farm equipment
- [Sophisticated Storage](https://modrinth.com/mod/sophisticated-storage), for slot memory mostly
- [Structure Compass](https://modrinth.com/mod/structure-compass), to avoid spending forever looking for ancient cities

### Changed
- [Enchanted: Witchcraft](https://modrinth.com/mod/enchanted-witchcraft) seeds now only drop when using a hoe, because they were filling up my inventory while terraforming
- player heads can now be used to disguise Armor Stands
- updated various mods, but nothing particularly interesting
  - [Fowl Play](https://modrinth.com/mod/fowlplay) got a ton of AI improvements, i guess
- Lectern now uses the [Scholar](https://modrinth.com/mod/scholar) editing screen rather than the [Amendments](https://modrinth.com/mod/amendments) one
- several [Guard Villagers](https://modrinth.com/mod/guard-villagers) changes:
  - Engineers and Machinists from [Immersive Engineering](https://modrinth.com/mod/immersiveengineering) can now repair Iron Golems, and Gunsmiths will repair guards' equipment
  - Guard villagers now have double health (40 vs 20) so they hopefully die to random stupid decisions less
  - Guard villagers are now much more conservative about firing ranged weapons if there's a villager potentially in the way, and they'll dive less deeply to fight mobs underwater

### Deprecated
*These mods will be removed in the next version.*
- [Beautify](https://modrinth.com/mod/beautify): see #136.
- [Eternal Starlight](https://modrinth.com/mod/eternal-starlight), for now. i think it'll be really cool after some updates but right now the dimension is pretty empty.
- ~~Limited Barrels from [Sophisticated Storage](https://modrinth.com/mod/sophisticated-storage) - i was going to deprecate [Storage Drawers](https://modrinth.com/mod/storagedrawers) instead, but the Sophisticated Storage limited barrels have rendering issues, so i am no longer sure what to do with storage.~~ - see #176.

### Removed
- [Create: Entity Control](https://modrinth.com/mod/create-entity-control): removed because the server is small enough that overly large Create contraptions can be policed manually
- [In Control!](https://modrinth.com/mod/in-control): currently unused, might be readded later if i get particularly angry about baby zombies
- [McJtyLib](https://modrinth.com/mod/mcjtylib): library which was only used in this pack by Not Enough Wands
- [Not Enough Wands](https://modrinth.com/mod/not-enough-wands): replaced with [Building Gadgets](https://www.curseforge.com/minecraft/mc-mods/building-gadgets)
- [Overflowing Bars](https://modrinth.com/mod/overflowing-bars): this was only in the pack to support Better Heart Containers, which were previously removed. i never liked their specific implementation, anyway.
- [Smithing Template Viewer](https://modrinth.com/mod/smithing-template-viewer): not actually all that useful for its intended purpose, since it selects random base armor (on which trims might be hard or impossible to see) and doesn't tell you what each current armor piece (or the selected trim material) even _is_ so it's hard to select ones with a good contrast.