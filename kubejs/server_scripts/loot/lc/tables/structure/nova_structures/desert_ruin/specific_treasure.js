LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/nova_structures/desert_ruin/specific_treasure')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [1, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [1, 8]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:dune_armor_trim_smithing_template`).withWeight(1))
    })
})