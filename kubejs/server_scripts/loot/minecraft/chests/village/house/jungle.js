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
    let table = assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_jungle_house'),
        'jungle',
        [`${fd}:rice_panicle`, `${mc}:cocoa_beans`, `${mc}:melon_slice`, `${mc}:melon_seeds`, `${mc}:sugar_cane`, `${mc}:bamboo`],
        [[`${mc}:lily_pad`,    4], 
         [`${bp}:orange_cosmos`, 3], 
         [`${mc}:fern`,   1], [`${mc}:big_dripleaf`, 1], [`${mc}:small_dripleaf`, 1],
         [`${bp}:mahogany_sapling`,  3], [`${mc}:jungle_sapling`, 3]],
        [[`${fd}:cooked_rice`, 4], [`${cf}:bar_of_dark_chocolate`, 4], [`${fd}:melon_juice`, 2], [`${fd}:fried_rice`, 1]],
        [[`${bp}:mahogany_log`, 4], [`${mc}:jungle_log`, 3], [`${mc}:scaffolding`, 6], [`${mc}:feather`, 3], [`${bp}:orange_sand`, 4], [`${su}:lunch_basket`, 1]],
        ['lime', 'red', 'blue', 'yellow'],
        [[`${af}:villager_hat`, 2], 
         [`${af}:feral_claws`, 1],
         [`${af}:rooted_boots`, 1]],
        [[`${mc}:stone_axe`, 4], [`${mc}:fishing_rod`, 2], [`basicweapons:stone_spear`, 1]]
    )
})