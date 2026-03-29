LootJS.lootTables(e => {
    let a  = 'artifacts'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold/nether_portal')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 7])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base').withWeight(20))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [2, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:nether_brick`, [5, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [3, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:glowstone_dust`, [1, 3]).withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.empty().withWeight(55))
        pool.addEntry(LootEntry.of(`${mc}:golden_sword`).withWeight(10).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${mc}:golden_axe`).withWeight(10).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${mc}:golden_helmet`).withWeight(5).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${mc}:golden_chestplate`).withWeight(5).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${mc}:golden_leggings`).withWeight(5).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${mc}:golden_boots`).withWeight(5).enchantWithLevels(50))
        pool.addEntry(LootEntry.of(`${a}:strider_shoes`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:fire_gauntlet`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:obsidian_skull`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:flame_pendant`).withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['vaulttec', 'waaagh', 'eyas'])).withWeight(1))
    })
})