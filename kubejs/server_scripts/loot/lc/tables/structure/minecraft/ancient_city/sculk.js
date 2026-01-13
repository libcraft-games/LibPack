LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/sculk')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:sculk`, [4, 10]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:sculk_sensor`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:echo_shard`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:sculk_catalyst`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:ender_pearl`).withWeight(1))
    })
})