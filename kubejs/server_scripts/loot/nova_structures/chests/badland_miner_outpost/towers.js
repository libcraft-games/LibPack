LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/badland_miner_outpost_towers')
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(3).damage([0.5, 0.8]))
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`).withWeight(2).damage([0.5, 0.8]))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]).withWeight(20))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(16))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(8))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:gold_nugget`, [5, 9]).withWeight(15),
            LootEntry.of(`${mc}:gold_ingot`, [1, 3]).withWeight(9),
            LootEntry.of(`${mc}:emerald`, [2, 5]).withWeight(3),
            LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(1)
        ]))
    })
})