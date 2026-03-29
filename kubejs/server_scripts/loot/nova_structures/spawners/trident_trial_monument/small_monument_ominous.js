LootJS.lootTables(e => {
    let cc = 'crittersandcompanions'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/trident_trial_monument/ttm_small_monument_ominous')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${fd}:kelp_roll_slice`, 2).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:emerald_block`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:strong_strength`))
        pool.addEntry(LootEntry.of(`${mc}:nautilus_shell`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
    })
})