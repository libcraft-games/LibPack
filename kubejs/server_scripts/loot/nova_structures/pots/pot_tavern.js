LootJS.lootTables(e => {
    let mc = 'minecraft'
    
    let items = [
        [`${mc}:wheat`, 9],
        [`${mc}:apple`, 7],
        [`${mc}:potato`, 6],
        [`${mc}:carrot`, 6],
        [`${mc}:sugar`, 5],
        [`${mc}:stick`, 5],
        [`${mc}:bread`, 4],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_tavern'), items)
})