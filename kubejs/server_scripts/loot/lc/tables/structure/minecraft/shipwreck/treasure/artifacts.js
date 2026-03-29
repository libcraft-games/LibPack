LootJS.lootTables(e => {
    let a = 'artifacts'
    
    e.create('lc:tables/structure/minecraft/shipwreck/treasure/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${a}:golden_hook`).withWeight(4))
        pool.addEntry(LootEntry.of(`${a}:charm_of_sinking`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:anglers_hat`).withWeight(2))
    })
})