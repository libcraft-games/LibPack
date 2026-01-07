LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/victualer/simple').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:bread`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:cooked_mutton`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:cooked_rabbit`, [0, 2]).withWeight(3))
    })
})