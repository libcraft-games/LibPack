LootJS.lootTables(e => {
    let mc = 'minecraft', ie = 'immersiveengineering', se = 'simplest_excavators'
    e.create('lc:tables/structure/minecraft/buried_treasure/misc').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:music_disc_blocks`)           .withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_wait`)             .withWeight(5))
        pool.addEntry(LootEntry.of(`${se}:excavator_smithing_template`) .withWeight(3))
        pool.addEntry(LootEntry.of(`scriptor:tome_tier1`)               .withWeight(2)  .withQuality(3))
        pool.addEntry(LootEntry.of(`${ie}:shader_trident`)              .withWeight(1)  .withQuality(2))
        pool.addEntry(LootEntry.of(`${ie}:shader_microshark`)           .withWeight(1)  .withQuality(2))
    })
})