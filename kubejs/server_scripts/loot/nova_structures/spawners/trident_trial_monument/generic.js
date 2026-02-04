LootJS.lootTables(e => {
    let cc = 'crittersandcompanions'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_generic')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${fd}:salmon_roll`, 3).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:copper_ingot`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp`, 4).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:wet_sponge`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:fishcake`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:potion`).addPotion(`${mc}:water_breathing`).withWeight(1))
    })
})