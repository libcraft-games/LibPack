LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/center_exclusives')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${ie}:sheetmetal_lead`, [1, 4]).withWeight(64))
        pool.addEntry(LootEntry.of(`${su}:lumisene_bottle`).withWeight(32))
        pool.addEntry(LootEntry.of(`${mc}:sculk_shrieker`).withWeight(16))
        pool.addEntry(LootEntry.of(`${ie}:resonanz_engineering`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`, [1, 2]).withWeight(1))
    })
})