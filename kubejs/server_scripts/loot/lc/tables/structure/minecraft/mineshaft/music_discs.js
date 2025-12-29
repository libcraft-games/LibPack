LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/structure/mineshaft/music_discs').createPool(pool => {
            pool.addEntry(LootEntry.of(`${mc}:music_disc_11`))
            pool.addEntry(LootEntry.of(`${mc}:music_disc_13`).withQuality(1))
            pool.addEntry(LootEntry.of(`${mc}:music_disc_mellohi`).withQuality(2))
    })
})