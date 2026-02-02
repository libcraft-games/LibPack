// spotted in: big remnant, remnant smith
// by default consists of 1-4 lantern, 1-4 string, 4 flint, 1-2 iron + simple dungeon loot
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_5')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:lantern`, [1, 4]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:string`, [1, 4]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:flint`, [1, 4]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 2]).withWeight(14))
        pool.addEntry(LootEntry.of(`${su}:sconce`, [1, 4]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly().withWeight(3))
    })
})