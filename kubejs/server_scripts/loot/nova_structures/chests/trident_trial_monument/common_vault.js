LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/trident_trial_monument/ttm_common_vault')
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/ocean_stuff').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/resource_blocks'))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/treasure_common').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/shaders').withWeight(1))
    })
})