LootJS.lootTables(e => {
    let mc = 'minecraft'
    let xd = 'expandeddelight'
    let table = e.getLootTable('kaisyn:outpost/exclusives/outpost_mediterranean_barrel')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 8])
        pool.addEntry(LootEntry.of(`${mc}:sweet_berries`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:sugar`, [1, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${xd}:sweet_berry_juice`, [1, 3]).withWeight(3))
    })
})