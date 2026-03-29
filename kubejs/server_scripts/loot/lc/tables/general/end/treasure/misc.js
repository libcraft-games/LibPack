LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let es = 'enderscape'
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/end/treasure/misc')
    // this seemingly useless .clear() is required to avoid somehow acquiring diamond horse armor which was literally never in the code
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:spire_armor_trim_smithing_template`).withWeight(6))
        pool.addEntry(LootEntry.of(`${es}:stasis_armor_trim_smithing_template`).withWeight(5))
        pool.addEntry(LootEntry.of(`${es}:music_disc_glare`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:eye_armor_trim_smithing_template`).withWeight(3))
        pool.addEntry(LootEntry.of(`${es}:crescent_banner_pattern`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ee}:wobble_filter`).withWeight(1))
    })
})