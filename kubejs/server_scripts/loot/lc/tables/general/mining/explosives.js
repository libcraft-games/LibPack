LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/general/mining/explosives').createPool(pool => {
        pool.addEntry(LootEntry.of(`${ie}:gunpowder_barrel`,  [1, 5]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`,         [1, 6]).withWeight(25))
        pool.addEntry(LootEntry.of(`${ie}:dust_sulfur`,       [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:dust_saltpeter`,    [1, 8]).withWeight(1))
    })
})