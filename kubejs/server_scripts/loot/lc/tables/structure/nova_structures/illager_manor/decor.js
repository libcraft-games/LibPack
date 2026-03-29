LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let su = 'supplementaries'
    let table = e.create(`lc:tables/structure/${ns}/illager_manor/decor`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:red_candle`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:candle_holder_red`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:candle_holder`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:painting`, [1, 2]).withWeight(1))
    })
})