LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/piglin_outstation/spawner_piglin_outstation')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,  [2, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_1`,      [2, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`)             .withWeight(1).addPotion(`${mc}:fire_resistance`))
    })
})