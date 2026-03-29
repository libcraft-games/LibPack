LootJS.lootTables(e => {
    let mc = 'minecraft'
    
    let items = [
        [`${mc}:bread`, 7],
        [`${mc}:arrow`, 7],
        [`${mc}:emerald`, 1],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_basic'), items)
})