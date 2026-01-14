LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([15, 30]).damage([0.6, 0.8])
    }

    e.create('lc:tables/general/piglin/equipment/iron').createPool(pool => {        
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_pickaxe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_axe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_sword`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_club`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_spear`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_glaive`)))
    })
})