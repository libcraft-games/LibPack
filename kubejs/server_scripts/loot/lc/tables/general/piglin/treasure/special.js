LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    let sa = 'sweety_archaeology'
    e.create('lc:tables/general/piglin/treasure/special').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_block`, [1, 3]).withWeight(16))
        pool.addEntry(LootEntry.of(`${mc}:glowstone`, [2, 7]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:iron_block`, [1, 2]).withWeight(9))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(6).damage([0.7, 1]))
        pool.addEntry(LootEntry.of(`${nd}:golden_egg`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${nd}:golden_trophy`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:netherite_scrap`).withWeight(4))
        pool.addEntry(LootEntry.of(`${nd}:enchanted_golden_egg`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})