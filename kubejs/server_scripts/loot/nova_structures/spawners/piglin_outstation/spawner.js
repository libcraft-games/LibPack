LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:spawners/piglin_outstation/spawner_piglin_outstation')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,  3).withWeight(4))
        pool.addEntry(LootEntry.of(`${nd}:plate_of_cold_striderloaf`,      1).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`)             .withWeight(1).addPotion(`${mc}:fire_resistance`))
        pool.addEntry(NovaStructuresKeys.piglin_outstation.withWeight(1))
    })
})