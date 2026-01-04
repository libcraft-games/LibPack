// resources
    // bricks
    // copper ingots/nuggets
    // iron ingots/nuggets
    // clay
    // ink sacs
    // gunpowder
    // sugar
// junk
    // rotten flesh
    // spider eye
    // bone
    // rabbit hide
    // phantom membrane
    // mushrooms
// armor
    // leather
    // chain
    // leather horse
// tools, weapons
    // stone
// consumables
    // potion
    // bomb
// dungeoneering
    // torch
    // chalk
    // rope
    // arrows
// food
    // steak
    // bread
    // mushroom stew
    // apple cream mini waffle

// rewards
    // resources
        // rabbit hide
        // leather
        // ingots/nuggets
    // armor
        // leather set (sometimes enchanted)
        // chain set (sometimes enchanted)
        // leather horse armor
        // saddle
    // tools
        // stone (often enchanted)
        // shield (w/ banner, damaged)
    // containers
        // chalk box
        // sack
        // bundle
// filler - things which give general dungeon vibes
    // rotten flesh
    // spider eye
    // bone
    // phantom membrane
    // mushrooms
// supplies - refilling things used in dungeon
    // resources
        // sticks
        // coal
        // flint
        // feathers
    // building blocks
    // direct
        // torches
        // arrows
        // chalk
        // rope
    // food
        // steak
        // bread
        // mushroom stew
        // apple cream mini waffle
LootJS.lootTables(e => {
    assembleDungeonLoot(e.getLootTable('dungeoncrawl:chests/stage_1'),
        1,
        [['copper', 4], ['iron', 3], ['zinc', 2], ['gold', 1], ['silver', 1]],
        [['leather', 2], ['chainmail', 1]],
        [['stone', 2], ['iron', 1]]
    )
})