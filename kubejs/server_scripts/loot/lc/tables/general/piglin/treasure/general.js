LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/treasure/general').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [3, 9]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:glowstone_dust`, [9, 27]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [8, 17]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:ancient_debris`, [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantRandomly(`${mc}:soul_speed`))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(5))
        pool.addEntry(LootEntry.of(`${nd}:zoglin_trophy`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:snout_armor_trim_smithing_template`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ee}:ntsc_filter`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:piglin_banner_pattern`).withWeight(3))
        pool.addEntry(LootEntry.of(`${nd}:hoglin_trophy`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_pigstep`).withWeight(2))
    })
})