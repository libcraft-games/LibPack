LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/redstone_components')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:slime_ball`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:repeater`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:comparator`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:piston`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:sticky_piston`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:dispenser`).withWeight(1))
    })
})