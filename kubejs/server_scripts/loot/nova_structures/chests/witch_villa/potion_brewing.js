LootJS.lootTables(e => {
    let ch = 'chipped'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'
    let tf = 'twilightforest'
    let table = e.getLootTable('nova_structures:chests/witch_villa/potion_brewing')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:glass_bottle`, [1, 6]).withWeight(12))
        pool.addEntry(LootEntry.of(`${su}:jar`).withWeight(5))
        // todo: randomly generate contained potions
        pool.addEntry(LootEntry.of(`${tf}:brittle_potion_flask`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([7, 9])
        let ingredients = [
            ['sugar',                  11],
            ['redstone',               10],
            ['glistering_melon_slice',  9],
            ['cobweb',                  7],
            ['spider_eye',              7],
            ['pufferfish',              7],
            ['golden_carrot',           6],
            ['fermented_spider_eye',    6],
            ['rabbit_foot',             5],
            ['phantom_membrane',        4],
            ['magma_cream',             3],
            ['blaze_powder',            2],
            ['glowstone_dust',          2],
            ['ghast_tear',              1],
            ['nether_wart',             1]
        ]
        for(let [ingredient, weight] of ingredients)
            pool.addEntry(LootEntry.of(`${mc}:${ingredient}`).withWeight(weight))
    })
})