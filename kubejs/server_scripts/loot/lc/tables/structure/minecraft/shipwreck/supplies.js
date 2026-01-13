LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let sh = 'smallships'
    let su = 'supplementaries'
    e.create('lc:tables/structure/minecraft/shipwreck/supplies').createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:rope`, [2, 8]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:leather`, [1, 3]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [2, 10]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:stone`, [2, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [1, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:hemp_fabric`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:gunpowder_barrel`, [2, 10]).withWeight(4))
        pool.addEntry(LootEntry.of(`${sh}:cannon_ball`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:windmill_sail`).withWeight(2))
        pool.addEntry(LootEntry.of(`${sh}:cannon`).withWeight(1))
    })
})