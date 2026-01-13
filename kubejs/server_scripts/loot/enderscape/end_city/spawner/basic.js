LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'

    let table = e.getLootTable(`${es}:end_city/spawner/basic`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${cf}:chorus_fruit_popsicle`, [2, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:chorus_fruit_jam_sandwich`, [2, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:chorus_fruit_ice_cream_cone`, [2, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ed}:amberveil_stew`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ed}:amberveiled_curry`).withWeight(1))
    })
})