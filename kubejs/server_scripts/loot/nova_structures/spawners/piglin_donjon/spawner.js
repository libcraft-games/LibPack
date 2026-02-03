LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:spawners/piglin_donjon/spawner_piglin_donjon')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`,  3).withWeight(4))
        pool.addEntry(LootEntry.of(`${nd}:hotdog`,      2).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:potion`)             .withWeight(1).addPotion(`${mc}:fire_resistance`))
        pool.addEntry(NovaStructuresKeys.piglin_donjon.withWeight(1))
    })
})