LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/illager/weaponer/pillager')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).damage([0.85, 1]))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]))
    })
})