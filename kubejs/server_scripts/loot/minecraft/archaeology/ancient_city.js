LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:archaelogy/ancient_city`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/archaeology/remains').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/archaeology/resources').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/archaeology/sherds').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/archaeology/trims').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/sculk').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/archaeology/misc').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/artifacts').withWeight(1))
    })
})