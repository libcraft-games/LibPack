LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let uf = 'unusual_furniture'
    let vd = 'veggiesdelight'
    let table = assembleVillageLoot(e, e.getLootTable('minecraft:chests/village/village_taiga_house'),
        'taiga',
        [`${mc}:potato`, `${vd}:sweet_potato`,`${fd}:cabbage`, `${mc}:pumpkin_seeds`],
        [[`${mc}:sweet_berries`,    6], 
         [`${mc}:fern`,   2], [`${mc}:pumpkin`, 2],
         [`${mc}:large_fern`,   1], [`${mc}:brown_mushroom`,   1], [`${mc}:poppy`,   1], [`${mc}:dandelion`,   1],[`${mc}:sugar_cane`,   1],
         [`${mc}:spruce_sapling`, 5]],
        [[`${mc}:baked_potato`, 6], [`${mc}:cooked_mutton`, 3], [`${cf}:mutton_sandwich`, 3], [`${vd}:sweet_potato_pie`, 1]],
        [[`${mc}:spruce_log`, 5], [`${mc}:iron_nugget`, 5], [`${cf}:berry_jam_bottle`, 4], [`${mc}:spruce_boat`, 1]],
        ['green', 'brown', 'gray'],
        [[`${a}:villager_hat`, 2], [`${a}:steadfast_spikes`, 1], [`${a}:lucky_scarf`, 1]],
        [[`${mc}:stone_axe`, 4], [`${mc}:shears`, 1], [`${bw}:stone_dagger`, 1]]
    )
    let treasure_pool = table.pools[table.pools.length - 1]
    treasure_pool.addEntry(LootEntry.of(`${uf}:pig_plush`))
})