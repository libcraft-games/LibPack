// spotted in: illager manor ravager courtyard, big remnant, remnant bunny base
// by default consists of bow + 3-6 arrows + simple dungeon loot
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_6')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [3, 6]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(10).damage([0.45, 0.85]))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(5).jsonFunction({ function: `${su}:random_arrows` }))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(1).damage([0.45, 0.85]))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(1).damage([0.25, 0.65]).enchantWithLevels(10))
    })
})