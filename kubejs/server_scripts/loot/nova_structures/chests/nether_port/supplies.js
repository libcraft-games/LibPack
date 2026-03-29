LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:chests/nether_port/nether_port_supplies')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/nether_port/supplies_1'))
    })
    table.createPool(pool => {
        pool.rolls([2, 5])
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/nether_port/supplies_2'))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:chain`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:stone_pickaxe`).withWeight(2).enchantWithLevels([5, 15]).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(2).enchantWithLevels([5, 15]).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${bw}:stone_quarterstaff`).withWeight(2).enchantWithLevels([5, 15]).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${mc}:lava_bucket`).withWeight(1))
    })
})