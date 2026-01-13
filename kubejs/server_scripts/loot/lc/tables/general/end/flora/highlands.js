LootJS.lootTables(e => {
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/flora/highlands').createPool(pool => {
        pool.addEntry(LootEntry.of(`${es}:chorus_sprouts`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:chorus_flower`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ed}:chorusflame`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ed}:amberveil`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ed}:voidpepper`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ed}:ethereal_saffron`).withWeight(1))
    })
})