LootJS.lootTables(e => {
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    // e                LootTableEventJS    the event to create tables in
    // table            MutableLootTable    the parent table to modify
    // name             string              the village name used to create identifiers
    // crops            ResourceLocation[]  seeds and products local to the village
    // flora            (RL, int)[]         flora local to the village and their max count
    // food             (RL, int)[]         cooked food, like bread, mushroom stew, pumpkin pie
    // materials        (RL, int)[]         metal nuggets, maybe tool materials (e.g. flint)
    // products         (RL, int)[]         local products, like clay or green dye
    // trees            ResourceLocation[]  logs and saplings local to the village
    // colors           string[]            colors the sacks and bundles should be
    // artifacts        (RL, int)[]         artifacts which may spawn in the village
    assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_plains_house'),
        'plains',
        [`${mc}:carrot`, `${fd}:onion`, `${vd}:dandelion_leaf`, `${mc}:wheat`, `${vd}`]
    )
})