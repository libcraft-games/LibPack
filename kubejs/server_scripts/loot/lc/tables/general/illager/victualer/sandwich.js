LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/victualer/sandwich').createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:mutton_sandwich`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:mutton_sandwich_beetroot`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:vegetable_sandwich_beetroot_lettuce`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${cf}:rabbit_meatball_sandwich`, [1, 2]).withWeight(1))
    })
})