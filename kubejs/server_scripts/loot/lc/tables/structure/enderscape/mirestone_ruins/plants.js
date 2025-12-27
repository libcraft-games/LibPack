LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/plants').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${ed}:amberveil`,           [1, 4])    .withWeight(5)) 
        pool.addEntry(LootEntry.of(`${es}:blinklight`,          [2, 3])    .withWeight(4)) 
        pool.addEntry(LootEntry.of(`${ed}:ethereal_saffron`,    [2, 4])    .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${ed}:voidpepper`,          [1, 4])    .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${bp}:empyreal_sapling`,    [1, 3])    .withWeight(2)) 
    })  
})