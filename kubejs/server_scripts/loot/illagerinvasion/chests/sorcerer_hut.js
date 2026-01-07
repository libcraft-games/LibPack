LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/sorcerer_hut`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ii}:unusual_dust`, [1, 3]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2_3').withWeight(1))
    })
})