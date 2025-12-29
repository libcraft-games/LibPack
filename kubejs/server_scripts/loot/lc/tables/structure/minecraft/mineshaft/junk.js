LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/structure/mineshaft/junk').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:spider_eye`,  [1, 3])      .withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:string`,      [1, 5])      .withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:cobweb`,      [1, 2])      .withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:slime_ball`,  [1, 4])      .withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:bone`,        [1, 5])      .withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:pointed_dripstone`, [1, 6]).withWeight(10).matchBiome('minecraft:dripstone_caves'))
        pool.addEntry(LootEntry.of(`biomesoplenty:glowworm_silk`, [1, 6]).withWeight(10).matchBiome('biomesoplenty:glowing_grotto'))
        pool.addEntry(LootEntry.of(`biomesoplenty:webbing`, [1, 6]).withWeight(5).matchBiome('biomesoplenty:spider_nest'))
        pool.addEntry(LootEntry.of(`biomesoplenty:spider_egg`, [1, 3]).withWeight(5).matchBiome('biomesoplenty:spider_nest'))
    })
})