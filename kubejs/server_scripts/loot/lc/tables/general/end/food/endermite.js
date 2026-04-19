LootJS.lootTables(e => {
    let ed = 'endersdelight'
    e.create('lc:tables/general/end/food/endermite').createPool(pool => {
        pool.addEntry(LootEntry.of(`${ed}:mite_crust`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${ed}:uncanny_cookies`, [1, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ed}:crawling_sandwich`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ed}:crispy_skewer`, [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${ed}:endermite_stew`).withWeight(1))
    })
})