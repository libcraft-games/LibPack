LootJS.lootTables(e => {
    let path = 'nova_structures:chests/jungle_ruins/jungle_ruins_main_temple_wild'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/rare').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/equipment').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/artifacts_2').withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['ancient', 'stormflower', 'locus'])).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/spikes').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/redstone_components').withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/treasure').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/filler').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/flora').withWeight(2))
    })
})