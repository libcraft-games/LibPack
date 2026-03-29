LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${ns}:chests/illager_hideout_library`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper'))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels([2, 4]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantWithLevels([5, 9]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(2).enchantRandomly(`${ns}:illagers_bane`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantWithLevels([10, 22]))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2'))
    })
})