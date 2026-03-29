LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/redstone_components')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:string`, [1, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:tripwire_hook`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:hourglass`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:tnt`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:light_weighted_pressure_plate`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:stone_pressure_plate`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ee}:bits_filter`).withWeight(1))
    })
})