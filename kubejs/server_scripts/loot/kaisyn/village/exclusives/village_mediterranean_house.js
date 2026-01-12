LootJS.lootTables(e => {
    let a = 'artifacts'
    let bop = 'biomesoplenty'
    let cf = 'createfood'
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'
    let uf = 'unusual_furniture'
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
    let table = assembleVillageLoot(e, e.getLootTable('kaisyn:village/exclusives/village_mediterranean_house'),
        'mediterranean',
        [`${fd}:tomato`, `${vd}:broccoli`, `${vd}:cauliflower`, `${mc}:wheat`, `${fd}:onion`, `${mc}:sugar_cane`],
        [[`${bop}:sprout`,          3], [`${bop}:lavender`,             3], 
         [`${bop}:white_lavender`,  2], [`${mc}:lily_of_the_valley`,    1], [`${mc}:blue_orchid`, 1],
         [`${mc}:oak_sapling`,  2], [`${bop}:jacaranda_sapling`, 1]],
        [[`${cf}:pita_bread`, 4], [`${mc}:cooked_mutton`, 4], [`${cf}:gyro_meat_slice`, 5], [`${fd}:mutton_wrap`, 1], [`${cf}:mutton_wrap_lettuce_tomato`, 1]],
        [[`${mc}:white_wool`, 6], [`${mc}:clay`, 4], [`${mc}:brick`, 6], [`${mc}:painting`, 2], [`${mc}:flower_pot`, 3], [`${uf}:greek_pot`, 2]],
        ['red', 'white', 'green', 'blue'],
        [[`${a}:villager_hat`, 2], 
         [`${a}:anglers_hat`, 1],
         [`${a}:running_shoes`, 1]],
        [[`${mc}:stone_hoe`, 3], [`${mc}:fishing_rod`, 2], [`basicweapons:stone_dagger`, 1]]
    )
})