LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', sa = 'sweety_archaeology', se = 'simplest_excavators', sh = 'simplest_hammers'
    e.create('lc:tables/structure/mineshaft/misc_treasure').createPool(pool => {
        pool.addEntry(LootEntry.of(`${sa}:climbing_axe`)                .withWeight(5).damage([0.1, 0.4]))
        pool.addEntry(LootEntry.of(`${sh}:hammer_smithing_template`)    .withWeight(10))
        pool.addEntry(LootEntry.of(`${se}:excavator_smithing_template`) .withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`)                .withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`)      .withWeight(1).withQuality(2))
    })
})