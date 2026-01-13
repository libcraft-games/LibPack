LootJS.lootTables(e => {
    let mc = 'minecraft'
    let sm = 'scriptor'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${tf}:entities/death_tome_books`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:book`).withWeight(32).enchantWithLevels([1, 10]),
            LootEntry.of(`${mc}:book`).withWeight(8).enchantWithLevels([11, 20]),
            LootEntry.of(`${mc}:book`).withWeight(4).enchantWithLevels([21, 30]),
            LootEntry.of(`${mc}:book`).withWeight(1).enchantWithLevels([31, 40]),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${sm}:tome_tier1`).withWeight(8),
            LootEntry.of(`${sm}:tome_tier2`).withWeight(4),
            LootEntry.of(`${sm}:tome_tier3`).withWeight(2),
        ]))
    })
})