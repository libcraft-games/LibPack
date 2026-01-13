LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantRandomly()
    }

    e.create('lc:tables/structure/minecraft/shipwreck/armor').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:leather_helmet`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:leather_chestplate`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:leather_leggings`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:leather_boots`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${ae}:leather_gloves`)))
    })
})