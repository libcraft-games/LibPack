LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([30, 50]).damage([0.16, 0.48])
    }

    e.create('lc:tables/structure/minecraft/ancient_city/equipment').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_hoe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_pickaxe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_leggings`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:diamond_glaive`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:diamond_hammer`)))
    })
})