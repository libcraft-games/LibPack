LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    // only spawns in a single tower in the main structure, so basically a treasure chest, 
    // but it also spawns an outpost treasure chest, so not too generous
    let table = e.getLootTable('nova_structures:chests/badland_miner_outpost')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(3).damage([0.7, 1]).enchantWithLevels([20, 25]))
        pool.addEntry(LootEntry.of(`${ie}:axe_steel`).withWeight(2).damage([0.7, 1]).enchantWithLevels([20, 25]))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [2, 7]).withWeight(15).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:gold_nugget`, [5, 9]).withWeight(15),
            LootEntry.of(`${mc}:gold_ingot`, [1, 3]).withWeight(9),
            LootEntry.of(`${mc}:emerald`, [2, 5]).withWeight(3),
            LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(1)
        ]))
    })
})