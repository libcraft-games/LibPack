LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/trident_trial_monument/ttm_boss_vault_heart')
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/resource_blocks'))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/resource_blocks').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/ocean_stuff').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/treasure_common').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/ocean_stuff').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/treasure_common').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/treasure_rare').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/trident_trial_monument/shaders').withWeight(1))
    })
})