LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/underwater_ruin_small`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/filler').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/resources').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/equipment').withWeight(6))
        pool.addEntry(LootEntry.of(`${ee}:blur_filter`))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/exposure_expanded:.*underwater_ruin_small.*/)
})