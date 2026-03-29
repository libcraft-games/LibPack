LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/illusioner_tower_entrance`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/gardener/basic').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(1))
    })
})