LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_small_monument')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${fd}:kelp_roll`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, 3).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:strength`))
        pool.addEntry(LootEntry.of(`${mc}:nautilus_shell`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:water_breathing`))
    })
})