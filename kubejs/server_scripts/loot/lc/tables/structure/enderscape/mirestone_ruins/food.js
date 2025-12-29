LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/food').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${es}:flanger_berry`,   [2,  8]).withWeight(7)) 
        pool.addEntry(LootEntry.of(`${ed}:uncanny_cookies`, [5, 12]).withWeight(5)) 
        pool.addEntry(LootEntry.of(`${ed}:strange_eclair`,  [1,  3]).withWeight(2)) 
    })  
})