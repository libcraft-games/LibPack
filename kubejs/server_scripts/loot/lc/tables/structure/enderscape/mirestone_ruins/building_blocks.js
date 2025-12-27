LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/building_blocks').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${es}:mirestone_bricks`,    [1, 21])    .withWeight(10)) 
        pool.addEntry(LootEntry.of(`${es}:polished_mirestone`,  [1, 14])    .withWeight(6)) 
        pool.addEntry(LootEntry.of(`${es}:chiseled_mirestone`,  [1, 12])    .withWeight(5)) 
        pool.addEntry(LootEntry.of(`${es}:chiseled_end_stone`,  [1, 12])    .withWeight(4)) 
        pool.addEntry(LootEntry.of(`supplementaries:end_stone_lamp`, [1, 6]).withWeight(3))
    })  
})