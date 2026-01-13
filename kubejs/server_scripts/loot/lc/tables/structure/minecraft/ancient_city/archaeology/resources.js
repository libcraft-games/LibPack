LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/archaeology/resources')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:nugget_lead`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:nugget_uranium`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
    })
})