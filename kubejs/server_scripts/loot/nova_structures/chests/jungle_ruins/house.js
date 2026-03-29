LootJS.lootTables(e => {
    let a = 'artifacts'
    let bop = 'biomesoplenty'
    let cd = 'culturaldelights'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let uf = 'unusual_furniture'

    let table = e.getLootTable('nova_structures:chests/jungle_ruins/jungle_ruins_house')
    table.clear()

    table.createPool(pool => {
        pool.rolls([1, 5])
        pool.addEntry(LootEntry.of(`${fd}:rice_panicle`, [3, 13]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:sugar_cane`, [3, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:melon`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:cocoa_beans`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`create:bar_of_chocolate`, [1, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cd}:avocado`, [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:feather`, [3, 7]).withWeight(20))
        pool.addEntry(LootEntry.of(`${fd}:straw`, [7, 19]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:phantom_membrane`, [2, 5]).withWeight(12))
        pool.addEntry(LootEntry.of(`${bop}:bramble`, [3, 8]).withWeight(10))
        pool.addEntry(LootEntry.of(`${uf}:fudge_pot`, [1, 6]).withWeight(8))
        pool.addEntry(LootEntry.of(`${a}:thorn_pendant`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:feral_claws`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:rooted_boots`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:vine`, [4, 8]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:jungle_log`, [3, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:bamboo`, [2, 3]).withWeight(1))
    })
})