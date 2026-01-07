LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/victualer/vegetal').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:sweet_berries`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:beetroot`, [0, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${vd}:garlic`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${fd}:onion`, [1, 2]).withWeight(1))
    })
})