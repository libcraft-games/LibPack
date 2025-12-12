LootJS.lootTables(e => {
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
    // colors           string[]            colors the sacks and bundles should be
    // artifacts        (RL, int)[]         artifacts which may spawn in the village and their weights
    // tools            (RL, int)[]         tools which may spawn in the village and their weights
    assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_plains_house'),
        'plains',
        [`${mc}:carrot`, `${fd}:onion`, `${vd}:dandelion_leaf`, `${mc}:wheat`, `${vd}:cauliflower`, `${vd}:garlic`, `${ie}:seed`],
        [[`${mc}:dandelion`,    5], 
         [`${mc}:poppy`,        2], 
         [`${mc}:cornflower`,   1], [`${mc}:azure_bluet`, 1], [`${mc}:oxeye_daisy`, 1],
         [`${mc}:oak_sapling`,  3]],
        [[`${mc}:bread`, 6], [`${mc}:cooked_beef`, 2], [`${mc}:cooked_porkchop`, 3], [`${mc}:cooked_mutton`, 4]], // todo: more
        [[`supplementaries:rope`, 8], [`${mc}:lead`, 3]], // todo: products
        ['green', 'blue', 'brown', 'light_blue'],
        [[`${af}:everlasting_beef`, 4], 
         [`${af}:villager_hat`, 5], 
         [`${af}:superstitious_hat`, 2], 
         [`${af}:cowboy_hat`, 2], 
         [`${af}:lucky_scarf`, 1],
         [`${af}:running_shoes`, 1]],
        [[`${mc}:shears`, 5], [`${mc}:stone_hoe`, 4]]
    )
})