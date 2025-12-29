LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/resources').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${es}:nebulite_shards`,         [1, 7])    .withWeight(10)) 
        pool.addEntry(LootEntry.of(`${es}:nebulite`,                [1, 2])    .withWeight(5)) 
        pool.addEntry(LootEntry.of(`${es}:alluring_magnia_sprout`,  [1, 3])    .withWeight(4)) 
        pool.addEntry(LootEntry.of(`${es}:repulsive_magnia_sprout`, [1, 3])    .withWeight(4))
    })  
})