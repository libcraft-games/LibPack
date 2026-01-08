LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/victualer/sweets').createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:cream_sweet_roll_sweet_berry`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:honeyed_berries`, [1, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:cake`).withWeight(1))
    })
})