LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', sa = 'sweety_archaeology'
    e.create('lc:tables/structure/mineshaft/potions').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:night_vision`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(2).withQuality(1).addPotion(`${sa}:haste`))
        pool.addEntry(LootEntry.of(`${sa}:miner_brew`, [1, 2]).withWeight(1).withQuality(1))
    })
})