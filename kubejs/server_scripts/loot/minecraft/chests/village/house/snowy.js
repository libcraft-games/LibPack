LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    let table = assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_snowy_house'),
        'snowy',
        [`${vd}:turnip`, `${fd}:cabbage`, `${fd}:onion`, `${mc}:beetroot`, `${mc}:wheat`, `${mc}:pumpkin_seeds`],
        [[`${mc}:dandelion`,    2], [`${mc}:poppy`,   2], 
         [`${mc}:sugar_cane`,   1], [`${mc}:pumpkin`, 1],
         [`${mc}:spruce_sapling`, 2]],
        [[`${mc}:bread`, 6], [`${mc}:cooked_rabbit`, 5], [`${mc}:beetroot_soup`, 3], [`${vd}:turnip_salad`, 3], [`${mc}:rabbit_stew`, 1]],
        [[`${mc}:snowball`, 7], [`${mc}:ice`, 5], [`${mc}:coal`, 4], [`${mc}:rabbit_hide`, 2]],
        ['white', 'light_blue', 'light_gray'],
        [[`${a}:snowshoes`, 4], [`${a}:lucky_scarf`, 3], [`${a}:villager_hat`, 2], [`${a}:scarf_of_invisibility`, 1]],
        [[`${mc}:stone_hoe`, 3], [`${bw}:stone_club`, 2], [`${bw}:stone_quarterstaff`, 1]]
    )
    let treasure_pool = table.pools[table.pools.length - 1]
    treasure_pool.addEntry(LootEntry.reference('exposure_expanded:chests/village_snowy_house'))
})