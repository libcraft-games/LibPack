LootJS.lootTables(e => {
    let path = 'nova_structures:archaelogy/desert_ruin_ruins'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artefacts').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts_2').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/treasure').withWeight(1))
    })
})