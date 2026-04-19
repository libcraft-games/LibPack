LootJS.lootTables(e => {
    let bp = 'biomesoplenty'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('kaisyn:outpost/exclusives/outpost_rustic_barrel')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 8])
        pool.addEntry(LootEntry.of(`${mc}:honeycomb`, [1, 4]).withWeight(7))
        pool.addEntry(LootEntry.of(`${fd}:honey_cookie`, [1, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:poppy`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${bp}:maple_log`, [1, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`create:honeyed_apple`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:honey_block`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:honey_bottle`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:honeycomb_block`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:glass_bottle`, [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${bp}:red_maple_sapling`, [1, 3]).withWeight(1))
    })
})