LootJS.lootTables(e => {
    let cd = 'culturaldelights'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    let xd = 'expandeddelight'
    e.create('lc:tables/general/illager/victualer/sandwich').createPool(pool => {
        pool.addEntry(LootEntry.of(`${xd}:cranberry_goat_cheese_toast`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${vd}:turnip_mutton_skewer`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${xd}:goat_cheese_beetroot_salad`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${cd}:mutton_sandwich`, [1, 2]).withWeight(1))
    })
})