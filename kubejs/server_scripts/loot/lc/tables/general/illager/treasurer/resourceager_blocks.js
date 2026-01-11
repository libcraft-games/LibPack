LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/treasurer/resourceager_blocks').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:emerald_block`, [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:iron_block`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:storage_lead`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:storage_silver`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gold_block`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:diamond_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ii}:platinum_sheet`, [1, 2]).withWeight(1))
    })
})