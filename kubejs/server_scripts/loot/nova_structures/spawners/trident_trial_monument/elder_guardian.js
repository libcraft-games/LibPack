LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_elder_guardian')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${fd}:salmon_roll`, 3).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`, 5).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, 3).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:wet_sponge`, 4).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:strength`))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:copper_ingot`, 5).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:heart_of_the_sea`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:tide_armor_trim_smithing_template`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(NovaStructuresKeys.trident_trial_monument.ominous)
    })
})