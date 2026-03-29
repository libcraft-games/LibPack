LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_brewing')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:glass_bottle`, [1, 6]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(5).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(4).addPotion(`${mc}:harming`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(2).addPotion(`${mc}:healing`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${ii}:long_berserking`))
    })
    table.createPool(pool => {
        pool.rolls([7, 9])
        let ingredients = [
            ['redstone',               10],
            ['glistering_melon_slice',  9],
            ['spider_eye',              7],
            ['golden_carrot',           6],
            ['fermented_spider_eye',    6],
            ['rabbit_foot',             5],
            ['glowstone_dust',          2],
        ]
        for(let [ingredient, weight] of ingredients)
            pool.addEntry(LootEntry.of(`${mc}:${ingredient}`).withWeight(weight))
    })
})