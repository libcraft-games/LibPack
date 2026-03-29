// spotted in: big remnant
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    
    let items = [
        [`${mc}:gold_nugget`, 9],
        [`${mc}:quartz`, 7],
        [`${mc}:glowstone_dust`, 5],
        [`${nd}:hoglin_sausage`, 5],
        [`${nd}:roasted_sausage`, 4],
        [`${nd}:hoglin_loin`, 3],
        [`${nd}:cooked_loin`, 2],
        [`${mc}:golden_carrot`, 1],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_piglin'), items)
})