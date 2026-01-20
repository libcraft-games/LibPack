LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/piglin_outstation/spawner_piglin_outstation_ominous')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_block`,  [1, 2]).withWeight(20))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_2`,    [2, 4]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`)             .withWeight(5).addPotion(`${mc}:long_fire_resistance`))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})