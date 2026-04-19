LootJS.lootTables(e => {
    let ed = 'endersdelight'
    let es = 'enderscape'

    let table = e.getLootTable(`${es}:end_city/spawner/basic`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${ed}:chorus_pie_slice`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${ed}:amberveil_stew`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ed}:amberveiled_curry`).withWeight(1))
    })
})