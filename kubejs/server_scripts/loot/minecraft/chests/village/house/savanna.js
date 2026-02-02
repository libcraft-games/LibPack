LootJS.lootTables(e => {
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
    let table = assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_savanna_house'),
        'savanna',
        [`${vd}:bellpepper`, `${vd}:zucchini`, `${fd}:tomato`, `${mc}:wheat`],
        [[`${mc}:dandelion`,    3], 
         [`${mc}:poppy`,        3], 
         [`${mc}:melon`,   2],
         [`${mc}:acacia_sapling`,  2]],
        [[`${mc}:bread`, 6], [`${mc}:cooked_chicken`, 4], [`${mc}:cooked_beef`, 3], [`${vd}:zucchini_sandwich`, 1]],
        [[`${fd}:canvas`, 8], [`${mc}:leather`, 3], [`${mc}:lead`, 3], [`${mc}:egg`, 3], [`${mc}:acacia_log`, 2], [`${mc}:saddle`, 1]],
        ['green', 'orange', 'yellow', 'brown'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:cowboy_hat`, 1],
         [`${af}:running_shoes`, 1]],
        [[`${mc}:stone_hoe`, 4], [`${mc}:fishing_rod`, 1], [`basicweapons:stone_spear`, 1]]
    )
    let treasure_pool = table.pools[table.pools.length - 1]
    treasure_pool.addEntry(LootEntry.reference('exposure_expanded:chests/village_savanna_house'))
    treasure_pool.addEntry(LootEntry.of(`${uf}:cow_plush`))
})