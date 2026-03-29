LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    let cd = 'culturaldelights'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/flora')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:moss_block`, [1, 4]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:cocoa_beans`, [1, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:bamboo`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:jungle_sapling`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${cd}:avocado_sapling`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${bop}:mahogany_sapling`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:melon`, [1, 3]).withWeight(1))
    })
})