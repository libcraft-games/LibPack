LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cd = 'culturaldelights'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
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
    let table = assembleVillageLoot(e, e.getLootTable('kaisyn:village/village_swamp_house'),
        'swamp',
        [`${fd}:rice_panicle`, `${fd}:rice`, `${cd}:eggplant`, `${mc}:sugar_cane`, `${mc}:bamboo`],
        [[`${mc}:lily_pad`,    3], [`${mc}:blue_orchid`,    3], 
         [`${mc}:brown_mushroom`,    2], [`${bp}:cattail`,    2], [`${bp}:toadstool`,    2],
         [`${bp}:willow_sapling`,  3], [`${mc}:oak_sapling`, 2], [`${mc}:mangrove_propagule`, 1]],
        [[`${fd}:cooked_rice`, 5], [`${cd}:smoked_eggplant`, 3], [`${fd}:mushroom_rice`, 2], [`${fd}:fried_rice`, 1]],
        [[`${mc}:mud`, 6], [`${mc}:clay_ball`, 5], [`${mc}:sugar`, 4], [`${mc}:slime_ball`, 3], [`${mc}:paper`, 3]],
        ['green', 'purple', 'blue', 'black'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:anglers_hat`, 1],
         [`${af}:aqua_dashers`, 1]],
        [[`${mc}:stone_shovel`, 2], [`${mc}:stone_axe`, 2], [`${mc}:fishing_rod`, 2], [`basicweapons:stone_dagger`, 1]]
    )
})