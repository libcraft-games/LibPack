LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:spawners/piglin_donjon/spawner_piglin_donjon_ominous')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_block`,  [1, 2]).withWeight(20))
        pool.addEntry(LootEntry.of(`${nd}:chilidog`,    [2, 4]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)       .withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:potion`)             .withWeight(5).addPotion(`${mc}:long_fire_resistance`))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})