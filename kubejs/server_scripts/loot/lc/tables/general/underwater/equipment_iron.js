LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/equipment_iron').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(4).damage([0.85, 1]).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(3).damage([0.65, 0.95]).enchantRandomly().enchantRandomly())
        pool.addEntry(LootEntry.of(`${bw}:iron_spear`).withWeight(3).damage([0.65, 1]).enchantRandomly().enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:potion`, [1, 2]).withWeight(2).addPotion(`${mc}:long_water_breathing`))
    })
})