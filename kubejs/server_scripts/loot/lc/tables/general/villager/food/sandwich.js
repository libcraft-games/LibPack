LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    e.create('lc:tables/general/villager/food/sandwich').createPool(pool => {
        pool.addEntry(LootEntry.of(`${fd}:chicken_sandwich`, [1, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${fd}:bacon_sandwich`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:beef_meatball_sandwich`, [1, 2]).withWeight(1))
    })
})