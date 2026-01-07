LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/victualer/soup').createPool(pool => {
        // TODO: apply suspicious stew effect
        pool.addEntry(LootEntry.of(`${mc}:suspicious_stew`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:mushroom_stew`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:beetroot_soup`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:mutton_stew_bowl`, 1).withWeight(3))
    })
})