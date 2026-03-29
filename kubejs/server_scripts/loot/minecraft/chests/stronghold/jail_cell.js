LootJS.lootTables(e => {
    let a  = 'artifacts'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold/jail_cell')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base').withWeight(20))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:cobweb`, [1, 6]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:chain`, [2, 7]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_bars`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:eye_armor_trim_smithing_template`).withWeight(1))
    })
})