LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let xd = 'expandeddelight'
    e.create('lc:tables/general/illager/victualer/sweets').createPool(pool => {
        pool.addEntry(LootEntry.of(`${xd}:berry_sweet_roll`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${fd}:sweet_berry_cookie`, [1, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:cake`).withWeight(1))
    })
})