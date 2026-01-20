LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:chests/piglin_donjon/donjon_generic')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:crimson_fungus`, [2, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:warped_fungus`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:red_mushroom`, [2, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:brown_mushroom`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:shroomlight`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:crimson_stem`, [3, 16]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:nether_salad`, [2, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${nd}:blue_tenderloin_steak`).withWeight(1))
        pool.addEntry(LootEntry.of(`${nd}:nether_burger`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:trial_key`).jsonFunction({
            function: `${mc}:set_components`,
            components: {
                custom_model_data: 717
            }
        })
        .jsonFunction({
            function: `${mc}:set_name`,
            name: {
                translate: "item.dnt.piglin_donjon_key",
                fallback: 'Piglin Donjon Key'
            },
            target: "item_name"
        }))
    })
})