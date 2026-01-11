LootJS.lootTables(e => {
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let sq = 'suppsquared'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/artefacts')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:archer_pottery_sherd`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:prize_pottery_sherd`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:blade_pottery_sherd`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:scrape_pottery_sherd`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:heart_pottery_sherd`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_relic`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:flower_banner_pattern`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:dune_armor_trim_smithing_template`).withWeight(2))
        pool.addEntry(LootEntry.of(`${sa}:music_disc_chunk_rascal`).withWeight(1))
        pool.addEntry(LootEntry.of(`${sq}:gold_plaque`).withWeight(1).addLore([
            Text.of('On the plaque, these words appear:'),
            Text.of('“My name is Isʀᴀᴘʜᴇʟ, Lord of Lords:').italic().gray(),
            Text.of('Look on my works, ye Mighty, and despair!”').italic().gray()
        ]))
    })
})