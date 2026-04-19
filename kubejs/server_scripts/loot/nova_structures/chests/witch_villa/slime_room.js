LootJS.lootTables(e => {
    let ch = 'chipped'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let table = e.getLootTable('nova_structures:chests/witch_villa/slime_room')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:slime_ball`, [1, 7]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:slime_block`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`heads:slime_head`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:oozing`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(1).addPotion(`${mc}:oozing`))
    })
})