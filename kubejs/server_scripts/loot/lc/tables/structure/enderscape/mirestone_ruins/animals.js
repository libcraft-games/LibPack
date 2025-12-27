LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/animals').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${ed}:mite_crust`,          [1, 2])    .withWeight(5)) 
        pool.addEntry(LootEntry.of(`${es}:rubble_chitin`,       [1, 2])    .withWeight(4)) 
        pool.addEntry(LootEntry.of(`${mc}:ender_pearl`,         [1, 6])    .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${mc}:ender_eye`,           [1, 2])    .withWeight(2)) 
        pool.addEntry(LootEntry.of(`${ed}:enderman_sight`,      [1, 2])    .withWeight(1))
    })  
})