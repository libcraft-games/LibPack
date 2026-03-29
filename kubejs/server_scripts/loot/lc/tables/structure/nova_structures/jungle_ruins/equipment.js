LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/nova_structures/jungle_ruins/equipment')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(6).enchantRandomly(`nova_structures:photosynthesis`))
        pool.addEntry(LootEntry.of(`${mc}:diamond_axe`).withWeight(4).enchantWithLevels([15, 25]).damage([0.1, 0.4]))
        pool.addEntry(LootEntry.of(`${bw}:diamond_spear`).withWeight(3).enchantWithLevels([15, 25]).damage([0.1, 0.4]))
        pool.addEntry(LootEntry.of(`${bw}:diamond_club`).withWeight(3).enchantWithLevels([15, 25]).damage([0.1, 0.4]))
        pool.addEntry(LootEntry.of(`${bw}:diamond_quarterstaff`).withWeight(3).enchantWithLevels([15, 25]).damage([0.1, 0.4]))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(3).enchantWithLevels([20, 30]))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(1).jsonFunction({ function: `${su}:random_arrows` }))
    })
})