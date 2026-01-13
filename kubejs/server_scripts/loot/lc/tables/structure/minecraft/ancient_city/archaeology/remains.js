LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/archaeology/remains')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 3]).withWeight(48))
        pool.addEntry(LootEntry.of(`${mc}:skeleton_skull`).withWeight(24))
        pool.addEntry(LootEntry.of(`heads:enderman_head`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
    })
})