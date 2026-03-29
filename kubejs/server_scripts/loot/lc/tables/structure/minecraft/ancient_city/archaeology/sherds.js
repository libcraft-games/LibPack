LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/archaeology/sherds')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:brick`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:flower_pot`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:warning_sign_shrieker`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:warning_sign_warden`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:arms_up_pottery_sherd`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:mourner_pottery_sherd`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:heartbreak_pottery_sherd`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:burn_pottery_sherd`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:skull_pottery_sherd`).withWeight(1))
    })
})