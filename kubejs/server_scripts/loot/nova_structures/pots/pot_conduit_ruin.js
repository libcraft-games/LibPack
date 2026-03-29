LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:pots/pot_conduit_ruin')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:seagrass`, [1, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:sand`, [3, 9]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:gravel`, [2, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:kelp`, [3, 11]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, [1, 5]).withWeight(1))
    })
})