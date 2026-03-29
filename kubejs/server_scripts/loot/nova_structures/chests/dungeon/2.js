// spotted in: badlands miner outpost library, big remnant, remnant bunny base
// by default consists of 1-3 book, 2-6 paper, 2-5 candle, 1-3 feather, 1-4 ink sac + simple dungeon loot
LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_2')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [2, 6])                       .withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 3])                        .withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 3])                      .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [1, 3])                     .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:ink_sac`, [1, 4])                     .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:book`)                                .withWeight(1).enchantWithLevels(`#${ns}:shrine`))
        pool.addEntry(LootEntry.of(`${mc}:book`)                                .withWeight(1).enchantRandomly())
        pool.addEntry(LootEntry.reference(`lc:tables/general/scriptor/tier_1`)  .withWeight(1))
    })
})