LootJS.lootTables(e => {
    let a  = 'artifacts'
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:nautilus_shell`).withWeight(5))
        pool.addEntry(LootEntry.of(`${a}:snorkel`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:flippers`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:charm_of_sinking`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:anglers_hat`).withWeight(2))
    })
})