LootJS.lootTables(e => {
    let a = 'artifacts'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create(`lc:tables/structure/${su}/galleon/safe/misc`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:map`, [1, 2]).withWeight(24))
        pool.addEntry(LootEntry.of(`${su}:blast_armor_trim_smithing_template`).withWeight(16))
        pool.addEntry(LootEntry.of(`${su}:antique_ink`, [1, 2]).withWeight(16))
        pool.addEntry(CreateExplorationMapEntryFromData('buried_treasure').withWeight(12))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`, [2, 4]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${su}:globe`).withWeight(8))
        pool.addEntry(LootEntry.of(`${su}:hourglass`).withWeight(8))
        // todo: stick a parrot in here
        pool.addEntry(LootEntry.of(`${su}:cage`).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:spyglass`).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(6))
        pool.addEntry(LootEntry.of(`${a}:golden_hook`).withWeight(6))
        pool.addEntry(LootEntry.of(`${a}:anglers_hat`).withWeight(3))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:music_disc_heave_ho`).withWeight(1))
    })
})