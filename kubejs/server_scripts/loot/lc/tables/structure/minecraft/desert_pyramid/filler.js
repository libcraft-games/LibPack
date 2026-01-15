LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let sq = 'suppsquared'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/filler')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:sand`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:dust_saltpeter`, [1, 4]).withWeight(1))
    })
})