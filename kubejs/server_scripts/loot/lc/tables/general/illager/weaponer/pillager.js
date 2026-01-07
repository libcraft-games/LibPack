LootJS.lootTables(e => {
    let mc = 'minecraft'
    let basher = e.create('lc:tables/general/illager/weaponer/pillager')
    basher.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).damage([0.85, 1]))
    })
    basher.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]))
    })
})