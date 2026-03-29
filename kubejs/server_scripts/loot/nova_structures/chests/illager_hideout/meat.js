LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_meat')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${cf}:rabbit_cuts`, [2, 6]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:mutton_chops`, [2, 6]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:rabbit`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:mutton`, [1, 3]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${cf}:cooked_rabbit_cuts`, [2, 6]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:cooked_mutton_chops`, [2, 6]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:cooked_rabbit`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:cooked_mutton`, [1, 3]).withWeight(1))
    })
})