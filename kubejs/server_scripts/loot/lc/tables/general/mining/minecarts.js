LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/general/mining/minecarts').createPool(pool => {
        pool.addEntry(LootEntry.of('create:minecart_coupling', [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:minecart`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:chest_minecart`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:minecart_woodencrate`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:minecart_woodenbarrel`).withWeight(1))
    })
})