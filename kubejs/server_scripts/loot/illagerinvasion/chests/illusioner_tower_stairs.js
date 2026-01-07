LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/illusioner_tower_stairs`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/gardener/basic').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/gardener/exotic').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [1, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ii}:illusionary_dust`, [1, 3]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/illusioner').withWeight(1))
    })
})