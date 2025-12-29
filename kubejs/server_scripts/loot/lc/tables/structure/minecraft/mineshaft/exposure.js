LootJS.lootTables(e => {
    let mc = 'minecraft', ex = 'exposure', ee = 'exposure_expanded'
    e.create('lc:tables/structure/mineshaft/exposure').createPool(pool => {
        pool.addEntry(exposure_photo('mineshaft/tunnel')        .withWeight(10))
        pool.addEntry(exposure_photo('mineshaft/skeleton')      .withWeight(9))
        pool.addEntry(exposure_photo('mineshaft/skeleton_smirk').withWeight(1))
        pool.addEntry(LootEntry.of(`${ee}:spider_filter`).withWeight(17))
        pool.addEntry(LootEntry.of(`${ee}:sobel_filter`).withWeight(13))
    })
})