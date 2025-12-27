LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    let table = e.getLootTable(`${es}:mirestone_ruins/chest`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/building_blocks') .withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/resources')       .withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/food')            .withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/plants')          .withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/animals')         .withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/treasures')       .withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/structure/enderscape/mirestone_ruins/fillers').withWeight(15))
    })
})