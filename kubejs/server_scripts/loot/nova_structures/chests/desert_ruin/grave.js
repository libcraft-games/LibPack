LootJS.lootTables(e => {
    let mc = 'minecraft'
    let path = 'nova_structures:chests/desert_ruins/desert_ruin_grave'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/desert_ruin/specific_treasure').withWeight(8))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/filler').withWeight(9))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:skeleton_skull`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:creeper_head`).withWeight(1))
    })
})