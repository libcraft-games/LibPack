LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/nova_structures/nether_port/supplies_1')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [6, 11]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:blaze_powder`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`, [1, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:glowstone_dust`, [1, 3]).withWeight(1))
    })
})