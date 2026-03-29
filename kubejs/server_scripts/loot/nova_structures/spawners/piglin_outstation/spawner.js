LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/piglin_outstation/spawner_piglin_outstation')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,  3).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_1`,      2).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`)             .withWeight(1).addPotion(`${mc}:fire_resistance`))
        pool.addEntry(NovaStructuresKeys.piglin_outstation.withWeight(1))
    })
})