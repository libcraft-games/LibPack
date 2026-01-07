LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/fillager/basic').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [0, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:stick`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:dark_oak_log`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:flint`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [0, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:leather`, [0, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 2]).withWeight(1))
    })
})