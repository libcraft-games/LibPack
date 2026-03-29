LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let table = e.getLootTable('kaisyn:outpost/common/armory')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.of(`${mc}:charcoal`, [2, 5]))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [3, 7]))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.empty().withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`).withWeight(3).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${mc}:shield`).withWeight(3).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`).withWeight(2).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${bw}:iron_glaive`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${mc}:iron_helmet`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${mc}:iron_chestplate`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${mc}:iron_leggings`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${mc}:iron_boots`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
        pool.addEntry(LootEntry.of(`${ae}:iron_gloves`).withWeight(1).damage([0.35, 0.85]).enchantWithLevels([-10, 10]))
    })
})