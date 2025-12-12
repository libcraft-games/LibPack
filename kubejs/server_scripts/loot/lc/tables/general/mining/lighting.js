LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/general/mining/lighting').createPool(pool => {
        pool.addEntry(LootEntry.of('minecraft:torch', [1, 15])          .withWeight(10))
        pool.addEntry(LootEntry.of('suppsquared:copper_lantern', [1, 4]).withWeight(2).withQuality(-1))
        pool.addEntry(LootEntry.of('minecraft:lantern', [1, 3])         .withWeight(1).withQuality(1))
    })
})