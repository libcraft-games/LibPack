LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'

    function enchantAndDamage(entry) {
        return entry.enchantRandomly()
    }

    e.create('lc:tables/structure/minecraft/shipwreck/supply/tools').createPool(pool => {
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:stone_shovel`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:stone_pickaxe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:stone_axe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:stone_sword`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:stone_dagger`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:stone_quarterstaff`)))
    })
})