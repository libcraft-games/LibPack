LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cd = 'culturaldelights'
    let cf = 'createfood'
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
    let table = assembleVillageLoot(e, e.getLootTable('kaisyn:village/village_jungle_house'),
        'sparse_jungle',
        [`${fd}:rice_panicle`, `${mc}:cocoa_beans`, `${mc}:melon_slice`, `${cd}:avocado`, `${mc}:sugar_cane`, `${mc}:bamboo`],
        [[`${mc}:lily_pad`,    5], 
         [`${bp}:pink_hibiscus`, 3], 
         [`${bp}:blue_hydrangea`,   2], [`${mc}:large_fern`, 1],
         [`${bp}:palm_sapling`,  3], [`${bp}:flowering_oak_sapling`, 3]],
        [[`${cd}:rice_ball`, 11], [`${cd}:tropical_roll`, 4], [`${fd}:melon_juice`, 2], [`${cd}:hearty_salad`, 3]],
        [[`${bp}:palm_log`, 4], [`${mc}:oak_log`, 3], [`${mc}:scaffolding`, 6], [`${mc}:feather`, 3], [`${mc}:torch`, 6]],
        ['green', 'pink', 'light_blue', 'white'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:cloud_in_a_bottle`, 1],
         [`${af}:aqua_dashers`, 1]],
        [[`${mc}:stone_hoe`, 2], [`${mc}:stone_axe`, 2], [`${mc}:fishing_rod`, 2], [`basicweapons:stone_club`, 1]]
    )
})