LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    e.create('lc:tables/general/end/food/endermite').createPool(pool => {
        pool.addEntry(LootEntry.of(`${ed}:mite_crust`, [1, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${ed}:uncanny_cookies`, [1, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${cf}:endermite_meatball_sandwich`).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:endermite_meatball_stick_3`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ed}:endermite_stew`).withWeight(1))
    })
})