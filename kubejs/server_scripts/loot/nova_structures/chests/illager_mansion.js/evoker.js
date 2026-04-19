LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/evoker_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:vex_armor_trim_smithing_template`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:totem_of_undying`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantWithLevels([20, 39]))
        pool.addEntry(LootEntry.of(`${mc}:mojang_banner_pattern`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:glow_berries`, [5, 8]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [6, 8]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [5, 7]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [3, 5]).withWeight(1))
    })
})