LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${ii}:chests/labyrinth_map`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 10]).withWeight(32))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [1, 5]).withWeight(16))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 6]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:map`).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:slice_map`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(1))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ii}:lost_candle`).withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2'))
        // todo: explorer maps
            // villages (named as Target Map)
            // ancient cities
            // illager structures
            // other structures tbd
    })
})