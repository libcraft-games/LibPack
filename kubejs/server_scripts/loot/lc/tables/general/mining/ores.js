LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/general/mining/ores').createPool(pool => {
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${mc}:raw_iron`,      [4, 9]) .withWeight(10),
            LootEntry.of(`${mc}:raw_copper`,    [5, 10]).withWeight(13),
            // todo: way higher weight in badlands biomes
            LootEntry.of(`${mc}:raw_gold`,      [1, 9]) .withWeight(4),
            LootEntry.of(`create:raw_zinc`,     [6, 12]).withWeight(6),
            LootEntry.of(`${ie}:raw_lead`,      [4, 8]) .withWeight(6),
            LootEntry.of(`${ie}:raw_silver`,    [2, 9]) .withWeight(5)
        ))
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${mc}:coal`,          [4, 10]).withWeight(12),
            LootEntry.of(`${mc}:lapis_lazuli`,  [5, 12]).withWeight(7),
            // todo: emerald but only in mountain biomes
            LootEntry.of(`${mc}:diamond`,       [1, 4]) .withWeight(2),
            LootEntry.of(`${mc}:redstone`,      [4, 11]).withWeight(6)
        ))
    })
})