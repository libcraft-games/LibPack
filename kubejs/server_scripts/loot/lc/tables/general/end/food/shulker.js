LootJS.lootTables(e => {
    let ed = 'endersdelight'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/food/shulker').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:shulker_shell`, [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ed}:shulker_mollusk`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ed}:ender_paella`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ed}:stuffed_shulker`).withWeight(1))
    })
})