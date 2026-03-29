LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${su}:loot/galleon/cannon`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [7, 16]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:cannonball`, [7, 16]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:bomb`, [8, 23]).withWeight(1))
    })
})