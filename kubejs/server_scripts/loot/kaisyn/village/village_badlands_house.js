LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cd = 'culturaldelights'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
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
    let table = assembleVillageLoot(e, e.getLootTable('kaisyn:village/village_badlands_house'),
        'badlands',
        [`${cd}:corn_cob`, `${cd}:corn_kernels`, `${mc}:pumpkin_seeds`],
        [[`${mc}:dead_bush`,    2], [`${mc}:tall_dry_grass`,    2],  [`${mc}:short_dry_grass`,    2], 
         [`${mc}:sunflower`,    2],
         [`${mc}:oak_sapling`, 1]],
        [[`${cf}:corn_stick`, 8], [`${cd}:elote`, 4], [`${cd}:chicken_taco`, 1], [`${cd}:beef_burrito`, 1]],
        [[`${mc}:terracotta`, 6], [`${mc}:red_sandstone`, 6], [`${cf}:corn_flour`, 4], [`${mc}:armadillo_scute`, 2], [`${mc}:gold_nugget`, 13], [`${mc}:gold_ingot`, 1], [`${uf}:huge_pot`, 2]],
        ['orange', 'brown', 'red'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:onion_ring`, 1],
         [`${af}:bunny_hoppers`, 1]],
        [[`${mc}:stone_pickaxe`, 3], [`${mc}:stone_hoe`, 3], [`basicweapons:stone_quarterstaff`, 2]]
    )
})