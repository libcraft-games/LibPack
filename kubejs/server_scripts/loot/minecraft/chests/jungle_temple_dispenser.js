LootJS.lootTables(e => {
    let mc = 'minecraft'
    let path = 'minecraft:chests/jungle_temple_dispenser'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [1, 5]).withWeight(1).addPotion(`${mc}:long_poison`))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [1, 5]).withWeight(1).addPotion(`${mc}:strong_poison`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`, [1, 3]).withWeight(1).addPotion(`${mc}:long_poison`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`, [1, 3]).withWeight(1).addPotion(`${mc}:strong_poison`))
    })
})