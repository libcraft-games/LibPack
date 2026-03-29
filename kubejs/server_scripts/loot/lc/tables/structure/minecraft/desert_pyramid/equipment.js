LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/equipment')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:golden_hoe`).withWeight(5).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${bw}:golden_glaive`).withWeight(3).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${bw}:golden_spear`).withWeight(3).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${mc}:golden_helmet`).withWeight(3).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(3).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${mc}:golden_horse_armor`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:saddle`).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(1).jsonFunction({ function: `${su}:random_arrows` }))
    })
})