LootJS.lootTables(e => {
    let es = 'enderscape'
    let mc = 'minecraft'
    let table = e.getLootTable(`${es}:end_city/chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 7])
        pool.addEntry(LootEntry.reference('lc:tables/general/end/flora/highlands').withWeight(27))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/building_materials').withWeight(21))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/food/chorus').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/food/shulker').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/food/endermite').withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/resources').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/armor').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/tools').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/weapons').withWeight(1))
    })
})