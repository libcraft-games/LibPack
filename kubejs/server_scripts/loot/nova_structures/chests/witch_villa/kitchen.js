LootJS.lootTables(e => {
    let cd = 'culturaldelights'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'

    let table = e.getLootTable('nova_structures:chests/witch_villa/kitchen')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        let entries = [
            [`${vd}:dandelion_leaf`,        4, 7],
            [`${cf}:sliced_brown_mushroom`, 6, 6],
            [`${cf}:sliced_red_mushroom`,   4, 6],
            [`${fd}:rice`,                  5, 6],
            [`${mc}:beetroot`,              5, 6],
            [`${cd}:eggplant`,              5, 6],
            [`${fd}:onion`,                 5, 4],
            [`${vd}:garlic`,                1, 4],
            [`${mc}:egg`,                   2, 3]
        ]
        for(let [item, maxCt, weight] of entries) {
            pool.addEntry(LootEntry.of(item, [1, maxCt]).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        let entries = [
            [`${cd}:smoked_eggplant`, 3, 5],
            [`${fd}:cooked_rice`, 3, 4],
            [`${mc}:bread`, 4, 4],
            [`${vd}:beetroot_brownie`, 4, 2],
            [`${mc}:pumpkin_pie`, 3, 1],
        ]
        for(let [item, maxCt, weight] of entries) {
            pool.addEntry(LootEntry.of(item, [1, maxCt]).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls([1, 5])
        let entries = [
            [`${mc}:suspicious_stew`, 13],
            [`${mc}:beetroot_soup`, 9],
            [`${fd}:mixed_salad`, 9],
            [`${vd}:dandelion_juice`, 7],
            [`${vd}:dandelion_and_eggs`, 7],
            [`${cd}:poached_eggplants`, 6],
            [`${cf}:vegetable_sandwich_beetroot_lettuce`, 5],
            [`${cf}:eggplant_burger_lettuce`, 4],
            [`${cf}:eggplant_burger_tomato`, 4],
            [`${cd}:eggplant_burger`, 3],
            [`${fd}:pumpkin_soup`, 2],
        ]
        for(let [item, weight] of entries) {
            pool.addEntry(LootEntry.of(item).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${fd}:iron_knife`).withWeight(2).damage([0.5, 0.7]))
        pool.addEntry(LootEntry.of(`${fd}:cutting_board`).withWeight(1))
    })
})