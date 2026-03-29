LootJS.lootTables(e => {
    let a = 'artifacts'
    let cf = 'createfood'
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
            pool.rolls([2, 4])
            pool.addEntry(LootEntry.of(`${cf}:glow_berry_popsicle`, [3, 9]).withWeight(30))
            pool.addEntry(LootEntry.of(`${fd}:milk_bottle`, [2, 4]).withWeight(30))
            pool.addEntry(LootEntry.of(`${cf}:chocolate_milk_bottle`, [2, 4]).withWeight(24))
            pool.addEntry(LootEntry.of(`${cf}:chocolate_milkshake_bottle`, [1, 4]).withWeight(18))
            pool.addEntry(LootEntry.of(`${cf}:glow_berry_milkshake_bottle`, [1, 3]).withWeight(12))
            pool.addEntry(LootEntry.of(`${cf}:fruit_smoothie_bottle`, [1, 3]).withWeight(6))
            pool.addEntry(LootEntry.of(`${a}:snowshoes`).withWeight(1))
            pool.addEntry(LootEntry.of(`${a}:steadfast_spikes`).withWeight(1))
        })
    }
})