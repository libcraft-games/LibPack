LootJS.lootTables(e => {
    let mc = 'minecraft'
    let path = 'nova_structures:chests/desert_ruins/desert_ruin_house'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/filler').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(7))
    })
})