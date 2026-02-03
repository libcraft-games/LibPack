LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    let table = e.create('lc:tables/structure/nova_structures/nether_port/supplies_2')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:crimson_fungus`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:warped_fungus`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:crimson_planks`, [1, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:crimson_stem`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:nether_wart_block`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${nd}:strider_slice`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${nd}:strider_rock`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:nether_wart`, [1, 4]).withWeight(1))
    })
})