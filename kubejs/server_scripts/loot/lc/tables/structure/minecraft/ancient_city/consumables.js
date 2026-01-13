LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    let ug = 'undergarden'

    let table = e.create('lc:tables/structure/minecraft/ancient_city/consumables')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:glow_berry_cream_chocolate_sweet_roll`,           [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${cf}:glow_berry_cream_chocolate_sweet_roll_glow_berry`,[1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`,                               [2, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:potion`,                                          [1, 3]).withWeight(2).addPotion(`${mc}:strong_regeneration`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`,                                [1, 2]).withWeight(1).addPotion(`${ug}:long_glowing`))
    })
})