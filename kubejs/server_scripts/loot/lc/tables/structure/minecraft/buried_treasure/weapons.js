LootJS.lootTables(e => {
    let mc = 'minecraft', bw = 'basicweapons'
    e.create('lc:tables/structure/minecraft/buried_treasure/weapons').createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:diamond_dagger`)  .withWeight(5)                  .damage([0.5, 1]))
        pool.addEntry(LootEntry.of(`${bw}:diamond_spear`)   .withWeight(4)  .withQuality(1) .damage([0.35, 0.95]))
        pool.addEntry(LootEntry.of(`${mc}:diamond_sword`)   .withWeight(3)  .withQuality(2) .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`${mc}:trident`)         .withWeight(1)  .withQuality(3) .damage([0.05, 0.25]))
    })
})