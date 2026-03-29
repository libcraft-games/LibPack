LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:chests/piglin_outstation/outstation_treasure')
    table.clear()
    table.createPool(pool => {
        pool.rolls([0, 2])
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [5, 8]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`,  [1, 2]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
        pool.addEntry(LootEntry.of(`${cf}:dragon_burger_crimson_fungus`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(4))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/special').withWeight(18))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/shaders').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(1))
    })
})