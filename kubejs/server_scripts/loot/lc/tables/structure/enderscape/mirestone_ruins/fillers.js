LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/fillers').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${es}:corrupt_growth`,  [1, 14])    .withWeight(10)) 
        pool.addEntry(LootEntry.of(`${es}:murublight_shelf`,[2, 12])    .withWeight(7)) 
        pool.addEntry(LootEntry.of(`${bp}:enderphyte`,      [1, 7])     .withWeight(5)) 
        pool.addEntry(LootEntry.of(`${bp}:endbloom`,        [1, 9])     .withWeight(4)) 
        pool.addEntry(LootEntry.of(`${bp}:lumaloop`,        [1, 6])     .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${bp}:wispjelly`,       [3, 9])     .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${bp}:anomaly`,         [3, 16])    .withWeight(2)) 
    })  
})