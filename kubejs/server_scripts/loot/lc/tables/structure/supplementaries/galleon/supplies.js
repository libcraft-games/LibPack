LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create(`lc:tables/structure/${su}/galleon/supplies`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:rope`, [1, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:gray_wool`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:light_gray_wool`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [1, 13]).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:sconce`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [3, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [3, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:ingot_lead`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:lantern`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:bucket`).withWeight(1))
    })
})