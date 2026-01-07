LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/fillager/extra').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:copper_ingot`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [1, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:resin_clump`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:fermented_spider_eye`).withWeight(1))
    })
})