LootJS.lootTables(e => {
    let a  = 'artifacts'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('minecraft:chests/stronghold/library')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base'))
    })
    table.createPool(pool => {
        pool.rolls([2, 5])
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 5]).withWeight(30))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(20).enchantWithLevels([10, 20]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(10).enchantWithLevels([20, 30]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels([30, 40]))
        pool.addEntry(LootEntry.reference(`lc:tables/general/scriptor/tiers_2_3_4`).withWeight(20))
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 5]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:name_tag`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:map`).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:antique_ink`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(1))
    })
})