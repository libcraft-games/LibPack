LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let ug = 'undergarden'
    let xd = 'expandeddelight'

    let table = e.create('lc:tables/structure/minecraft/ancient_city/consumables')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${xd}:glow_berry_sweet_roll`,           [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`,                               [2, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${fd}:glow_berry_custard`,[1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:potion`,                                          [1, 3]).withWeight(2).addPotion(`${mc}:strong_regeneration`))
        pool.addEntry(LootEntry.of(`${mc}:potion`,                                          [1, 4]).withWeight(1).addPotion(`${mc}:long_night_vision`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`,                                [1, 2]).withWeight(1).addPotion(`${ug}:long_glowing`))
    })
})