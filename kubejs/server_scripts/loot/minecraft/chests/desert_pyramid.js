LootJS.lootTables(e => {
    let path = 'minecraft:chests/desert_pyramid'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/filler').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/redstone_components').withWeight(4))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/treasure').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*desert_pyramid.*/)
    e.removeGlobalModifiers(/chalk:.*desert_pyramid.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*desert_pyramid.*/)
    e.removeGlobalModifiers(/sophisticatedbackpacks:.*desert_pyramid.*/)
})