LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/food/chorus').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:chorus_fruit`, [2, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${es}:chorus_cake_roll`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ed}:chorus_pie`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ed}:chorus_stew`).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:chorus_fruit_milkshake_bottle`).withWeight(1))
    })
})