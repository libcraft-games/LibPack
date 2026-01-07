LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/illager/weaponer/basher')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).damage([0.85, 1]))
        pool.addEntry(LootEntry.of(`${mc}:shield`).damage([0.85, 1]))
    })
})