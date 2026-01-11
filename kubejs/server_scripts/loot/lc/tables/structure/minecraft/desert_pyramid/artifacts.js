LootJS.lootTables(e => {
    let a  = 'artifacts'    
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/artifacts')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${a}:feral_claws`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:rooted_boots`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:pocket_piston`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:kitty_slippers`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:cloud_in_a_bottle`).withWeight(1))
    })
})