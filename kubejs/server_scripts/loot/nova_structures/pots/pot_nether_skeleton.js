// spotted in: big remnant
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    
    let items = [
        [`${mc}:coal`, 7],
        [`${mc}:gunpowder`, 6],
        [`${mc}:bone_meal`, 5],
        [`${mc}:gold_nugget`, 5],
        [`${mc}:glowstone_dust`, 5],
        [`${mc}:quartz`, 4],
        [`${mc}:nether_wart`, 4],
        [`${mc}:fire_charge`, 3],
        [`${mc}:blaze_powder`, 2],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_nether_skeleton'), items)
})