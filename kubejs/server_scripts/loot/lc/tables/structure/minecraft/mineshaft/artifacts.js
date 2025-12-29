LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', af = 'artifacts'
    e.create('lc:tables/structure/mineshaft/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${af}:lucky_scarf`).withWeight(3))
        pool.addEntry(LootEntry.of(`${af}:charm_of_shrinking`).withWeight(2))
        pool.addEntry(LootEntry.of(`${af}:universal_attractor`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:digging_claws`).withWeight(4))
        pool.addEntry(LootEntry.of(`${af}:onion_ring`).withWeight(3))
        pool.addEntry(LootEntry.of(`${af}:pickaxe_heater`).withWeight(5))
    })
})