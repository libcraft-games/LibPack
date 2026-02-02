LootJS.lootTables(e => {
    let cd = 'culturaldelights'
    let cf = 'createfood'
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    let af = 'artifacts'
    let uf = 'unusual_furniture'
    let vd = 'veggiesdelight'
    // e                LootTableEventJS    the event to create tables in
    // table            MutableLootTable    the parent table to modify
    // name             string              the village name used to create identifiers
    // crops            ResourceLocation[]  seeds and products local to the village
    // flora            (RL, int)[]         flora local to the village and their max count
    // food             (RL, int)[]         cooked food, like bread, mushroom stew, pumpkin pie
    // products         (RL, int)[]         local products, like clay or green dye
    // colors           string[]            colors bundles should be
    // artifacts        (RL, int)[]         artifacts which may spawn in the village and their weights
    // tools            (RL, int)[]         tools which may spawn in the village and their weights
    let table = assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_desert_house'),
        'desert',
        [`${vd}:bellpepper`, `${mc}:wheat`, `${vd}:zucchini_seeds`, `${fd}:tomato_seeds`],
        [[`${mc}:cactus`,    5], 
         [`${mc}:sugar_cane`,        2], 
         [`${mc}:cactus_flower`, 1],
         [`${mc}:dead_bush`,  3]],
        [[`${cd}:tortilla`, 6], [`${mc}:cooked_rabbit`, 5], [`${cf}:rabbit_jerky`, 2], [`${vd}:mhadjeb`, 1]],
        [[`${mc}:rabbit_hide`, 4], [`${mc}:paper`, 3], [`${mc}:clay_ball`, 3], [`${mc}:green_dye`, 2], [`${mc}:rabbit_foot`, 1], [`${uf}:tall_clay_pot`, 2]],
        ['yellow', 'light_blue'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:cowboy_hat`, 1],
         [`${af}:running_shoes`, 1]],
        [[`${mc}:stone_shovel`, 4], [`${mc}:fishing_rod`, 1], [`basicweapons:stone_quarterstaff`, 1]]
    )
    let treasure_pool = table.pools[table.pools.length - 1]
    treasure_pool.addEntry(LootEntry.reference('exposure_expanded:chests/village_desert_house'))
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*village_desert_house.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*village_desert_house.*/)
})