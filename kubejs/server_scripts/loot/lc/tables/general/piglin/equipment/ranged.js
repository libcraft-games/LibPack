LootJS.lootTables(e => {
    let mc = 'minecraft'

    e.create('lc:tables/general/piglin/equipment/ranged').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:arrow`,           [5, 17]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`)                .withWeight(2)                  .damage([0.9, 1]))
        pool.addEntry(LootEntry.of(`${mc}:spectral_arrow`,  [5, 17]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`)                .withWeight(1).enchantRandomly().damage([0.7, 1]))
    })
})