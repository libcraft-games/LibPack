LootJS.lootTables(e => {
    let a = 'artifacts'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/treasurer/artificer').createPool(pool => {
        pool.addEntry(LootEntry.of(`${a}:withered_bracelet`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:vampiric_glove`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:chorus_totem`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:charm_of_sinking`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:cowboy_hat`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:night_vision_goggles`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:pocket_piston`).withWeight(1))
    })
})