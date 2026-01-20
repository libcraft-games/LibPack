LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/creeping_crypt/spawner_creeping_ominous')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${ie}:ingot_steel`,     [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`)                .withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`,       [2, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:egg_sandwich`,    [2, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`,   [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:long_swiftness`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:strong_healing`))
    })
})