LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/treasure').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:coast_armor_trim_smithing_template`).withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, [1, 3]).withWeight(18))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`, [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:tide_armor_trim_smithing_template`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:trident`).withWeight(1).damage([0.15, 0.35]))
    })
})