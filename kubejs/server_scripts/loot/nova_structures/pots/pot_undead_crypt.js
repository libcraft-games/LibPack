LootJS.lootTables(e => {
    let cd = 'createdeco'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:pots/pot_undead_crypt')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [3, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:red_candle`, [3, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [7, 12]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`, [3, 9]).withWeight(6))
        pool.addEntry(LootEntry.of(`${su}:ash`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cd}:gold_coin`, [2, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:nugget_silver`, [2, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cd}:brass_coin`, [2, 6]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, 1).withWeight(1))
    })
})