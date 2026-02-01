LootJS.lootTables(e => {
    let mc = 'minecraft'
    let pd = 'promotional_music_discs'
    e.create('lc:tables/general/illager/treasurer/musicker').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:music_disc_13`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_mellohi`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_stal`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_ward`).withWeight(1))
        pool.addEntry(LootEntry.of(`${pd}:music_disc_creakstep`).withWeight(1))
    })
})