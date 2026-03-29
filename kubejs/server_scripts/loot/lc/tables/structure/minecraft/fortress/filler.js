LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/fortress/filler')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:ash`, [2, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [3, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [4, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:quartz`, [3, 6]).withWeight(5))
        pool.addEntry(LootEntry.of(`${bop}:rose_quartz_chunk`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:nether_brick`, [4, 8]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:nether_wart`, [4, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:blaze_rod`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [3, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:crying_obsidian`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [3, 4]).withWeight(1))
    })
})