// [sic]
// used for witch huts in general
LootJS.lootTables(e => {
    let ch = 'chipped'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'
    let tf = 'twilightforest'
    let table = e.getLootTable('nova_structures:chests/mangrove_witchhud')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:glass_bottle`, [1, 3]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(6).addPotion(`${mc}:water`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:awkward`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:healing`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(2).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(1).addPotion(`${mc}:harming`))
    })
    table.createPool(pool => {
        pool.rolls([3, 7])
        let ingredients = [
            ['sugar',                  11],
            ['redstone',               10],
            ['glistering_melon_slice',  9],
            ['cobweb',                  7],
            ['spider_eye',              7],
            ['pufferfish',              7],
            ['fermented_spider_eye',    6],
            ['rabbit_foot',             5],
            ['phantom_membrane',        4],
            ['blaze_powder',            2],
            ['glowstone_dust',          2],
            ['nether_wart',             1]
        ]
        for(let [ingredient, weight] of ingredients)
            pool.addEntry(LootEntry.of(`${mc}:${ingredient}`).withWeight(weight))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:stick`, [2, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:brown_mushroom`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:red_mushroom`, [1, 2]).withWeight(5))
        // todo: random effects
        pool.addEntry(LootEntry.of(`${mc}:suspicious_stew`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:mushroom_stew`).withWeight(2))
    })
})