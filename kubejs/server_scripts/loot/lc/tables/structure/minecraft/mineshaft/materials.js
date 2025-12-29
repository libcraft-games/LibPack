LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/structure/mineshaft/materials').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stick`, [1, 13])          .withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:oak_planks`, [1, 6])      .withWeight(7)                  .matchStructure(`${mc}:mineshaft`))
        pool.addEntry(LootEntry.of(`${mc}:dark_oak_planks`, [1, 6]) .withWeight(7)                  .matchStructure(`${mc}:mineshaft_mesa`))
        pool.addEntry(LootEntry.of(`${mc}:oak_fence`, [1, 7])       .withWeight(5)                  .matchStructure(`${mc}:mineshaft`))
        pool.addEntry(LootEntry.of(`${mc}:dark_oak_fence`, [1, 7])  .withWeight(5)                  .matchStructure(`${mc}:mineshaft_mesa`))
        pool.addEntry(LootEntry.of('supplementaries:rope', [2, 12]) .withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 5])      .withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:ingot_steel`, [1, 3])     .withWeight(1).withQuality(3))
    })
})