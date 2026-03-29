LootJS.lootTables(e => {
    let es = 'enderscape'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/building_materials').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:end_stone`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:end_rod`, [1, 4]).withWeight(7))
        pool.addEntry(LootEntry.of(`${es}:end_lamp`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:purpur_block`, [1, 7]).withWeight(2))
        pool.addEntry(LootEntry.of(`${es}:dusk_purpur_block`, [1, 7]).withWeight(2))
    })
})