// spotted in: big remnant
LootJS.lootTables(e => {
    let mc = 'minecraft'
    
    let items = [
        [`${mc}:flint`, 5],
        [`${mc}:coal`, 5],
        [`${mc}:arrow`, 5],
        [`${mc}:bread`, 5],
        [`${mc}:potato`, 5],
        [`${mc}:carrot`, 4],
        [`${mc}:wheat_seeds`, 4],
        [`${mc}:stick`, 4],
        [`${mc}:iron_nugget`, 4],
        [`${mc}:apple`, 3],
        [`${mc}:feather`, 3],
        [`${mc}:gold_nugget`, 3],
        [`${mc}:gunpowder`, 2],
        [`${mc}:poisonous_potato`, 1],
        [`${mc}:emerald`, 1],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_generic_ruin'), items)
})