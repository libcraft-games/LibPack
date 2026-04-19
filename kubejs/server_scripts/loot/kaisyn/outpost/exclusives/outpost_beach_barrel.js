LootJS.lootTables(e => {
    let cr = 'crittersandcompanions'
    let mc = 'minecraft'
    let table = e.getLootTable('kaisyn:outpost/exclusives/outpost_beach_barrel')
    table.clear()
    // todo: a barrel should have either [dried kelp + dried kelp block] or [salmon + cod + clam] (or maybe some other resources?)
    // rather than the current mix of a bunch of stuff
    table.createPool(pool => {
        pool.rolls([3, 8])
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp`, [1, 4]).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:salmon`, [1, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:cod`, [1, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${cr}:clam`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp_block`, [1, 4]).withWeight(2))
    })
})