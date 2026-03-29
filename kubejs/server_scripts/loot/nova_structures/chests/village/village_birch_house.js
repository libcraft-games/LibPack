LootJS.lootTables(e => {
    let bp = 'biomesoplenty'
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    let af = 'artifacts'
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
    let table = assembleVillageLoot(e, e.getLootTable('nova_structures:chests/village/village_birch_house'),
        'birch',
        [`${mc}:carrot`, `${fd}:onion`, `${vd}:mature_dandelion`, `${vd}:dandelion_leaf`, `${mc}:potato`],
        [[`${mc}:wildflowers`,    7], [`${mc}:lily_of_the_valley`,    3], 
         [`${mc}:oxeye_daisy`,        2], [`${mc}:cornflower`,        2], 
         [`${bp}:toadstool`,   1], [`${mc}:fern`, 1], [`${mc}:peony`, 1],
         [`${mc}:birch_sapling`,  4], [`${bp}:fir_sapling`,  1]],
        [[`${mc}:baked_potato`, 6], [`${fd}:mixed_salad`, 3], [`${fd}:vegetable_soup`, 2], [`${vd}:dandelion_and_eggs`, 1]],
        [[`${mc}:birch_log`, 4], [`${bp}:fir_log`, 3], [`${mc}:feather`, 4], [`${mc}:egg`, 4], [`${mc}:flint`, 4]],
        ['green', 'white', 'gray', 'lime'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:superstitious_hat`, 1],
         [`${af}:bunny_hoppers`, 1]],
        [[`${mc}:stone_axe`, 3], [`${fd}:flint_knife`, 2], [`basicweapons:stone_dagger`, 1]]
    )
})