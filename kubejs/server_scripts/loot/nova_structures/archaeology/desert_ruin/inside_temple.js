LootJS.lootTables(e => {
    let path = 'nova_structures:archaelogy/desert_ruin_inside_temple'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artefacts').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/treasure').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/redstone_components').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts_2').withWeight(2))
    })
})