LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/archaeology/trims')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:disc_fragment_5`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:ward_armor_trim_smithing_template`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:silence_armor_trim_smithing_template`).withWeight(1))
    })
})