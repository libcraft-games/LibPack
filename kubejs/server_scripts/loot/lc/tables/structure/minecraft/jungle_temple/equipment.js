LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/equipment')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).withWeight(4).enchantWithLevels([15, 25]))
        pool.addEntry(LootEntry.of(`${bw}:stone_spear`).withWeight(3).enchantWithLevels([15, 25]))
        pool.addEntry(LootEntry.of(`${bw}:stone_club`).withWeight(3).enchantWithLevels([15, 25]))
        pool.addEntry(LootEntry.of(`${bw}:stone_quarterstaff`).withWeight(3).enchantWithLevels([15, 25]))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(3).enchantWithLevels([15, 25]))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(1).jsonFunction({ function: `${su}:random_arrows` }))
    })
})