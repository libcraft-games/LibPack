LootJS.lootTables(e => {
    let mc = 'minecraft'
    let pd = 'promotional_music_discs'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/discs')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:disc_fragment_5`, [1, 2]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_11`).withWeight(6))
        pool.addEntry(LootEntry.of(`${pd}:music_disc_infinite_spooky_amethyst`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_stal`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_otherside`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_ward`).withWeight(1))
    })
})