LootJS.lootTables(e => {
    let lc = 'libcraft'
    let mc = 'minecraft'

    let table = e.getLootTable(`nova_structures:spawner_projectile/trident_trial_monument/projectile_trident_trial_monument`)
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${mc}:water_breathing`))
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${lc}:dolphins_grace`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${lc}:mining_fatigue`).withWeight(3))
    })
})