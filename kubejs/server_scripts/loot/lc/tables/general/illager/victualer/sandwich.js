LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/victualer/sandwich').createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:mutton_sandwich_beetroot`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:vegetable_sandwich_beetroot_lettuce`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${fd}:roasted_mutton_chops`).withWeight(2))
    })
})