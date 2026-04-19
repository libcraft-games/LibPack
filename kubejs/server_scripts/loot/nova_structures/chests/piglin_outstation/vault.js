LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:chests/piglin_outstation/vault_piglin_outstation')
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [5, 8]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`,  [1, 2]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/special').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:iron_block`, [3, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:lodestone`).withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/shaders').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(1))
    })
})