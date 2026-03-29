LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([21, 49]).damage([0.14, 0.77])
    }

    e.create('lc:tables/general/end/equipment/weapons').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:diamond_dagger`)).withWeight(5))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:diamond_quarterstaff`)).withWeight(4))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_sword`)).withWeight(3))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:diamond_hammer`)).withWeight(2))
    })
})