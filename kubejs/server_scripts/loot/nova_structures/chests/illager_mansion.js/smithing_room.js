LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let ie = global.ie.namespace
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let se = 'simplest_excavators'
    let sh = 'simplest_hammers'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/smithing_room`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:raw_iron`, [2, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:raw_lead`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:raw_gold`, [3, 6]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${sh}:hammer_smithing_template`).withWeight(11))
        pool.addEntry(LootEntry.of(`${se}:excavator_smithing_template`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:vex_armor_trim_smithing_template`).withWeight(7))
        pool.addEntry(LootEntry.of(`${bw}:steel_glaive`).withWeight(5).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${ie}:axe_steel`).withWeight(4).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${ie}:pickaxe_steel`).withWeight(3).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${bw}:steel_quarterstaff`).withWeight(2).damage([0.8, 1]))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:coal`, [2, 8]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:bucket`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:coal_coke`, [2, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:lava_bucket`).withWeight(1))
    })
})