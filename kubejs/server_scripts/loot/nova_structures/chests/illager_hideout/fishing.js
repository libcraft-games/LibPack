LootJS.lootTables(e => {
    let a  = 'artifacts'
    let cc = 'crittersandcompanions'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_fishing')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(25).damage([0.9, 1]))
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(15).enchantRandomly().damage([0.7, 0.9]))
        pool.addEntry(LootEntry.of(`${fd}:iron_knife`).withWeight(15).enchantRandomly().damage([0.7, 0.9]))
        pool.addEntry(LootEntry.of(`${a}:anglers_hat`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:cod`, [2, 4]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:salmon`, [2, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${cc}:koi_fish`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:tropical_fish`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:pufferfish`).withWeight(1))
        pool.addEntry(LootEntry.of(`${cc}:clam`).withWeight(1))
    })
})