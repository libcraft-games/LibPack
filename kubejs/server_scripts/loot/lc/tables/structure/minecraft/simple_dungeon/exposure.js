LootJS.lootTables(e => {
    let mc = 'minecraft', ex = 'exposure', ee = 'exposure_expanded'
    e.create('lc:tables/structure/minecraft/simple_dungeon/exposure').createPool(pool => {
        pool.addEntry(exposure_photo('dungeon/skull_on_fire').withWeight(1))
        pool.addEntry(LootEntry.of(`${ee}:spider_filter`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ee}:antialias_filter`).withWeight(1))
    })
})