LootJS.lootTables(e => {
    let a = 'artifacts'
    let bop = 'biomesoplenty'
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'
    let xd = 'expandeddelight'
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
    let table = assembleVillageLoot(e, e.getLootTable('kaisyn:village/village_mushroom_house'),
        'mushroom',
        [`${mc}:red_mushroom_block`, `${mc}:brown_mushroom_block`, `${mc}:mushroom_stem`, `${mc}:brown_mushroom`, `${mc}:red_mushroom`],
        [[`${fd}:red_mushroom_colony`, 3], [`${fd}:brown_mushroom_colony`, 3], [`${mc}:mycelium`, 2]],
        [[`${mc}:mushroom_stew`, 4], [`${vd}:garlic_stuffed_mushrooms`, 2], [`${xd}:asparagus_mushroom_pasta`, 1]],
        [[`${mc}:shroomlight`, 6], [`${mc}:leather`, 4]],
        ['red', 'white', 'brown', 'light_gray', 'purple'],
        [[`${a}:villager_hat`, 2], 
         [`${a}:cloud_in_a_bottle`, 1],
         [`${a}:crystal_heart`, 1]],
        [[`${mc}:stone_shovel`, 2], [`${mc}:stone_axe`, 2], [`${mc}:shears`, 2]]
    )
})