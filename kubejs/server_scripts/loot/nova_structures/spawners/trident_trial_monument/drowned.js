LootJS.lootTables(e => {
    let cc = 'crittersandcompanions'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_drowned')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${fd}:salmon_roll`, 2).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:copper_ingot`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${cc}:clam`, 2).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:fishcake`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(NovaStructuresKeys.trident_trial_monument.basic.withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:potion`).addPotion(`${mc}:water_breathing`).withWeight(1))
    })
})