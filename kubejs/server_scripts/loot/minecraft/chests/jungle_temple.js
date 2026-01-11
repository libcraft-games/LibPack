LootJS.lootTables(e => {
    let path = 'minecraft:chests/jungle_temple'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/rare').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/equipment').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/artifacts_2').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/redstone_components').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/spikes').withWeight(4))
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/filler').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/flora').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/jungle_temple/treasure').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*jungle_temple.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*jungle_temple.*/)
})