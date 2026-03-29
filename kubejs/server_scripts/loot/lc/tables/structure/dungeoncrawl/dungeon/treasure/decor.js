LootJS.lootTables(e => {
    let af = 'advancementframes'
    let he = 'horseexpert'
    let ip = 'immersive_paintings'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let sq = 'suppsquared'
    e.create('lc:tables/structure/dungeoncrawl/dungeon/treasure/decor').createPool(pool => {
        pool.addEntry(LootEntry.of(`${sq}:gold_candle_holder_black`, [1, 4]).withWeight(11))
        pool.addEntry(LootEntry.of(`${sq}:gold_candle_holder_red`, [1, 4]).withWeight(10))
        pool.addEntry(LootEntry.of(`${sq}:gold_candle_holder_orange`, [1, 4]).withWeight(9))
        pool.addEntry(LootEntry.of(`${sq}:gold_candle_holder_yellow`, [1, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:glow_item_frame`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${af}:advancement_frame`).withWeight(6))
        pool.addEntry(LootEntry.of(`${ip}:glow_painting`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:hourglass`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:globe`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:bell`).withWeight(1))
    })
})