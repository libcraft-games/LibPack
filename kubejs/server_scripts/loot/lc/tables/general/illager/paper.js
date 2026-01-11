LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/paper').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:paper`, [3, 5]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:name_tag`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:map`).withWeight(1))
    })
})