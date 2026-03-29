LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let cf = 'createfood'
    let cr = 'crittersandcompanions'
    let mc = 'minecraft'
    let table = e.getLootTable('kaisyn:outpost/exclusives/outpost_beach_barrel')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 8])
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp`, [1, 4]).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:salmon`, [1, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:cod`, [1, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(5).damage([0.5, 1]))
        pool.addEntry(LootEntry.of(`${cr}:clam`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp_block`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:fishcake`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(1).damage([0.25, 0.75]).enchantWithLevels(25))
    })
})