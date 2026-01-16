LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', su = 'supplementaries'
    e.create('lc:tables/structure/mineshaft/mining_info').createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:slice_map`).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(2))
        // survey tools appear not to actually do anything at the moment...
        // pool.addEntry(LootEntry.of(`${ie}:survey_tools`).damage([0.5, 1]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:clock`))
        pool.addEntry(CreateExplorationMapEntryFromData('buried_mineshaft').withWeight(1))
    })
})