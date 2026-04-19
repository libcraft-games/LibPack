LootJS.lootTables(e => {
    let a = 'artifacts'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    for (let namespace of [mc, ns]) {
        let table = e.getLootTable(`${namespace}:chests/ancient_city_ice_box`)
        table.clear()
        table.createPool(pool => {
            pool.rolls([2, 6])
            pool.addEntry(LootEntry.of(`${mc}:snowball`, [5, 8]).withWeight(18))
            pool.addEntry(LootEntry.of(`${mc}:snow_block`, [2, 4]).withWeight(9))
            pool.addEntry(LootEntry.of(`${mc}:ice`, [2, 4]).withWeight(9))
            pool.addEntry(LootEntry.of(`${mc}:packed_ice`, [2, 4]).withWeight(3))
            pool.addEntry(LootEntry.of(`${mc}:blue_ice`, [2, 4]).withWeight(1))
            pool.addEntry(LootEntry.of(`${mc}:powder_snow_bucket`, [1, 2]).withWeight(1))
        })
        table.createPool(pool => {
            pool.rolls([1, 2])
            pool.addEntry(LootEntry.of(`${fd}:melon_popsicle`, [3, 9]).withWeight(60))
            pool.addEntry(LootEntry.of(`${fd}:milk_bottle`, [2, 4]).withWeight(60))
        })
        table.createPool(pool => {
            pool.rolls(1)
            pool.addEntry(LootEntry.of(`${a}:snowshoes`).withWeight(1))
            pool.addEntry(LootEntry.of(`${a}:steadfast_spikes`).withWeight(1))
        })
    }
})