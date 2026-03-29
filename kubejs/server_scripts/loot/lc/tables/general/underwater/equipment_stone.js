LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/equipment_stone').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(4).damage([0.85, 1]))
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(3).damage([0.65, 0.95]).enchantRandomly())
        pool.addEntry(LootEntry.of(`${bw}:stone_spear`).withWeight(3).damage([0.65, 1]).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:potion`, [1, 2]).withWeight(2).addPotion(`${mc}:water_breathing`))
    })
})