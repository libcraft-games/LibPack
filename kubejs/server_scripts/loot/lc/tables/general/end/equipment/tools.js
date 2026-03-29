LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let fd = 'farmersdelight'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([21, 49]).damage([0.14, 0.77])
    }

    e.create('lc:tables/general/end/equipment/tools').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_pickaxe`)).withWeight(2))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_shovel`)).withWeight(2))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:diamond_axe`)).withWeight(2))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${fd}:diamond_knife`)).withWeight(1))
    })
})