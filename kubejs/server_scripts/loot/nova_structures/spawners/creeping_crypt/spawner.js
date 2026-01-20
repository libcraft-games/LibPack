LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/creeping_crypt/spawner_creeping')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,  [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:emerald`,     [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:bomb`,        [2, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:bread`,       [2, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:carrot`,      [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:swiftness`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:healing`))
    })
})