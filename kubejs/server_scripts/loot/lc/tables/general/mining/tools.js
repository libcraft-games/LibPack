LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', bw = 'basicweapons'
    e.create('lc:tables/general/mining/tools').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_pickaxe`)      .withWeight(10)                 .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`${mc}:iron_shovel`)       .withWeight(5)                  .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`${ie}:pickaxe_steel`)     .withWeight(5)  .withQuality(2) .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`${ie}:shovel_steel`)      .withWeight(3)  .withQuality(2) .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`${bw}:steel_dagger`)      .withWeight(2)  .withQuality(1) .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`farmersdelight:skillet`)  .withWeight(1)                  .damage([0.15, 0.85]))
        pool.addEntry(LootEntry.of(`supplementaries:sack`).withWeight(2))
    })
})