LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/villager/food/soup').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:mushroom_stew`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${fd}:vegetable_soup`).withWeight(3))
        pool.addEntry(LootEntry.of(`${fd}:chicken_soup`).withWeight(2))
    })
})