LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_generic_ominous')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${fd}:cod_roll`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:dried_kelp_block`, 2).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:sponge`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, 1).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${mc}:water_breathing`).withWeight(1))
    })
})