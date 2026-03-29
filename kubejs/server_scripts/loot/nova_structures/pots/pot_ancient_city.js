LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:pots/pot_ancient_city')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [4, 8]).withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:gray_wool`, [2, 4]).withWeight(18))
        pool.addEntry(LootEntry.of(`${mc}:glow_berries`, [4, 12]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [4, 8]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [2, 4]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:sculk`, [4, 12]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [4, 9]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [2, 10]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:ingot_lead`, [3, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:echo_shard`, [1, 3]).withWeight(1))
    })
})