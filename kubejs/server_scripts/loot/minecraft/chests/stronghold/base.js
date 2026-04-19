LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold/base')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stick`, [3, 7]).withWeight(120))
        pool.addEntry(LootEntry.of(`${mc}:bread`, [1, 5]).withWeight(105))
        pool.addEntry(LootEntry.of(`${mc}:apple`, [1, 3]).withWeight(90))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [2, 4]).withWeight(75))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [4, 9]).withWeight(60))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(40).addPotion(`${mc}:healing`))        
        pool.addEntry(LootEntry.of(`${fd}:apple_pie`).withWeight(35))
        pool.addEntry(LootEntry.of(`${mc}:ender_pearl`).withWeight(30))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 2]).withWeight(30))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:ender_eye`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})