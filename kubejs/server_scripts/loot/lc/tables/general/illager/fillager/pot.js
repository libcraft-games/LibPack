LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/fillager/pot').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [4, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:stick`, [5, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:flint`, [5, 9]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [4, 11]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [5, 9]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:sweet_berries`, [5, 10]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:beetroot`, [4, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [5, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 8]).withWeight(3))
        pool.addEntry(LootEntry.of(`${vd}:garlic`, [5, 7]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [4, 12]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:leather`, [3, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:resin_clump`, [1, 2]).withWeight(1))
    })
})