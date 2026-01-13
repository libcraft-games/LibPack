LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create(`lc:tables/structure/${su}/galleon/ammo`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [1, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${su}:cannonball`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:bomb`, [1, 2]).withWeight(2))
    })
})