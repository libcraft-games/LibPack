LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([21, 49]).damage([0.14, 0.77])
    }

    e.create('lc:tables/general/end/equipment/armor').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_helmet`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_chestplate`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_leggings`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_boots`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${ae}:diamond_gloves`)))
    })
})