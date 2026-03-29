LootJS.lootTables(e => {
    let a  = 'artifacts'    
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/fortress/artifacts')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${a}:withered_bracelet`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:flame_pendant`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:obsidian_skull`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:antidote_vessel`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:strider_shoes`).withWeight(1))
    })
})