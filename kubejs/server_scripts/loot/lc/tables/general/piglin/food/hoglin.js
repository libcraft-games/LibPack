LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/food/hoglin').createPool(pool => {
        pool.addEntry(LootEntry.of(`${nd}:roasted_sausage`,                     [1, 7]).withWeight(9))
        pool.addEntry(LootEntry.of(`${nd}:cooked_loin`,                         [1, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${nd}:bacon-wrapped_sausage_on_a_stick`,    [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${nd}:red_loin_on_a_stick`,                 [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${nd}:roast_ear`,                           [3, 9]).withWeight(1))
    })
})