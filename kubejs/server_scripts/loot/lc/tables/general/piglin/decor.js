LootJS.lootTables(e => {
    let mc = 'minecraft'
    let uf = 'unusual_furniture'
    e.create('lc:tables/general/piglin/decor').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:chain`,               [3,  9]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:lantern`,             [2,  4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${uf}:blackstone_pot`,      [1,  3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gilded_blackstone`,   [8, 12]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:crying_obsidian`,     [3,  8]).withWeight(1))
    })
})