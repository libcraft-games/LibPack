LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/structure/minecraft/buried_treasure/sea_stuff').createPool(pool => {
        pool.addEntry(LootEntry.of(`create:copper_diving_helmet`)   .withWeight(5)               .damage([0.5, 0.75]))
        pool.addEntry(LootEntry.of(`create:copper_diving_boots`)    .withWeight(3)               .damage([0.5, 0.75]))
        pool.addEntry(LootEntry.of(`${mc}:sponge`, [2, 8])          .withWeight(2).withQuality(2))
    })
})