LootJS.lootTables(e => {
    let mc = 'minecraft'
    let sm = 'scriptor'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${tf}:entities/death_tome_hurt`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(85))
        pool.addEntry(LootEntry.of(`${mc}:paper`).withWeight(64))
        pool.addEntry(LootEntry.of(`${sm}:scrap_tier1`).withWeight(16))
        pool.addEntry(LootEntry.of(`${sm}:scrap_tier2`).withWeight(4))
        pool.addEntry(LootEntry.of(`${sm}:scrap_tier3`).withWeight(1))
    })
})