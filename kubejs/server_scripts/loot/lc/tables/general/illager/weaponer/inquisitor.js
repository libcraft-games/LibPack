LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ie = global.ie.namespace
    let table = e.create('lc:tables/general/illager/weaponer/inquisitor')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_sword`).damage([0.85, 1]).enchantWithLevels([10, 30]))
        pool.addEntry(LootEntry.of(`${ie}:sword_steel`).damage([0.85, 1]))
        pool.addEntry(LootEntry.of(`${mc}:shield`).damage([0.85, 1]).enchantWithLevels([10, 30]))
    })
})