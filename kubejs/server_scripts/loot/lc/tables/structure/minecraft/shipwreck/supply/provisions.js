LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let sh = 'smallships'
    let su = 'supplementaries'
    e.create('lc:tables/structure/minecraft/shipwreck/supply/provisions').createPool(pool => {
        // todo: suspicious stew contents
        pool.addEntry(LootEntry.of(`${mc}:suspicious_stew`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:moss_block`, [1, 4]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:wheat`, [8, 21]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:poisonous_potato`, [2, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${fd}:rotten_tomato`, [2, 6]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:potato`, [2, 6]).withWeight(5))
        pool.addEntry(LootEntry.of(`${fd}:tomato`, [2, 6]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bamboo`, [1, 3]).withWeight(2))
    })
})