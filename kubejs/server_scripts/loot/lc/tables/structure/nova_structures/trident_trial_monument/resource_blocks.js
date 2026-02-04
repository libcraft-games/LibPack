LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/nova_structures/trident_trial_monument/resource_blocks')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:emerald_block`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:iron_block`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:diamond_block`).withWeight(1))
    })
})