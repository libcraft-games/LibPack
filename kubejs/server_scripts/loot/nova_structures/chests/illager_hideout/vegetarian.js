LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_vegitarian')
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(5))
        pool.addEntry(LootEntry.of(`${vd}:garlic_bread`, [2, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${vd}:garlic_stuffed_mushrooms`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:mixed_salad`, [1, 2]).withWeight(1))
    })
})