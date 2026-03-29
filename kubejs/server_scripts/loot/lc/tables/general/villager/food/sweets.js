LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    e.create('lc:tables/general/villager/food/sweets').createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:cream_mini_waffle`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:cookie`, [3, 11]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:cake`).withWeight(1))
    })
})