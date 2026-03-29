LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:pots/pot_badland_miner_outpost')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(13))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [3, 9]).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [4, 7]).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [3, 13]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:raw_copper`, [3, 12]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:raw_gold`, [3, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:raw_iron`, [3, 9]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:raw_aluminum`, [3, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`create:raw_zinc`, [3, 8]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:raw_silver`, [3, 6]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:raw_lead`, [3, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [3, 6]).withWeight(3))
    })
})