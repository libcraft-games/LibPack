LootJS.lootTables(e => {
    let es = 'enderscape'
    let mc = 'minecraft'
    let table = e.getLootTable(`${es}:end_city/elytra_vault`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/armor').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/tools').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/weapons').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/resources').withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/misc').withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(14))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/books').withWeight(11))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:elytra`))
    })
})