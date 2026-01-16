LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`nova_structures:chests/conduit_ruin/conduit_ruin_main`)
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.reference('nova_structures:chests/conduit_ruin/conduit_ruin_small').withWeight(2))
        pool.addEntry(LootEntry.reference('nova_structures:chests/conduit_ruin/conduit_ruin_big').withWeight(1))
    })
})