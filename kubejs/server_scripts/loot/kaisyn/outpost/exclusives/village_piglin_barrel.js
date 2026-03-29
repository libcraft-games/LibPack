LootJS.lootTables(e => {
    let table = e.getLootTable('kaisyn:village/exclusives/village_piglin_barrel')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/filler').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(4))
    })
})