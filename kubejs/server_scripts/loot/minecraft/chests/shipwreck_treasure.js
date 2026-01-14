LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/shipwreck_treasure`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/treasure/resources'))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/treasure/misc')      .withWeight(14))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/treasure/weapons')   .withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/treasure/artifacts') .withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*shipwreck.*/)
    e.removeGlobalModifiers(/sophisticatedbackpacks:.*shipwreck.*/)
    e.removeGlobalModifiers(/crittersandcompanions:.*inject_clams.*/)
})