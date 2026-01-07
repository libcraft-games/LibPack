LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/treasurer/resourceager').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [2, 5]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 4]).withWeight(9))
        pool.addEntry(LootEntry.of(`${ie}:ingot_lead`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${ie}:ingot_uranium`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:ingot_steel`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:ingot_silver`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ii}:platinum_chunk`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 2]).withWeight(1))
    })
})