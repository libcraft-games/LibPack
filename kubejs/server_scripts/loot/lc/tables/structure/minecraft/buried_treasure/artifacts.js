LootJS.lootTables(e => {
    let mc = 'minecraft', af = 'artifacts'
    e.create('lc:tables/structure/minecraft/buried_treasure/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${af}:charm_of_sinking`).withWeight(6))
        pool.addEntry(LootEntry.of(`${af}:snorkel`).withWeight(5))
        pool.addEntry(LootEntry.of(`${af}:flippers`).withWeight(5))
        pool.addEntry(LootEntry.of(`${af}:golden_hook`).withWeight(4))
        pool.addEntry(LootEntry.of(`${af}:anglers_hat`).withWeight(3))
        pool.addEntry(LootEntry.of(`${af}:aqua_dashers`).withWeight(3))
    })
})