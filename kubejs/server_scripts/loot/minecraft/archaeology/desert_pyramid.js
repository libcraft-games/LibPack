LootJS.lootTables(e => {
    let path = 'minecraft:archaeology/desert_pyramid'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artefacts').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/treasure').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/redstone_components').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(3))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*archaeology.desert_pyramid.*/)
})