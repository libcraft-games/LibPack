LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    
    e.create('lc:tables/structure/minecraft/shipwreck/treasure/weapons').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_sword`)  .withWeight(6).damage([0.65, 1])    .enchantWithLevels([5, 15]))
        pool.addEntry(LootEntry.of(`${ie}:sword_steel`) .withWeight(4).damage([0.35, 0.65]))
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`) .withWeight(3).damage([0.65, 1])    .enchantWithLevels([5, 15]))
        pool.addEntry(LootEntry.of(`${bw}:steel_dagger`).withWeight(2).damage([0.35, 0.65]))
    })
})