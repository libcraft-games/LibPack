LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/illager/victualer/preserves').createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:berry_jam_bottle`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${vd}:fermented_garlic_honey`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:honey_bottle`, [1, 3]).withWeight(3))
    })
})