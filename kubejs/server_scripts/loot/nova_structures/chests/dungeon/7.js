// spotted in: illager manor maze courtyard, big remnant, remnant bunny base
// by default consists of 1-2 emerald, 1-2 gold ingot + simple dungeon loot
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_7')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 2]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 2]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly().withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(1).damage([0.3, 1]))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})