LootJS.lootTables(e => {
    let path = 'nova_structures:chests/jungle_ruins/jungle_ruins_main_temple'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/rare').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/jungle_ruins/equipment').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/artifacts_2').withWeight(3))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['ancient', 'stormflower', 'locus'])).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/treasure').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/redstone_components').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/filler').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/flora').withWeight(2))
    })
})