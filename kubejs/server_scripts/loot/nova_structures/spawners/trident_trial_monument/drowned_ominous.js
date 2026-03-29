LootJS.lootTables(e => {
    let cc = 'crittersandcompanions'
    let fd = 'farmersdelight'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_drowned_ominous')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${fd}:cod_roll`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:oxidized_copper`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${cc}:clam`, 4).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:water_breathing`))
    })
    table.createPool(pool => {
        pool.addEntry(NovaStructuresKeys.trident_trial_monument.basic.withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${mc}:water_breathing`).withWeight(1))
    })
})