LootJS.lootTables(e => {
    let bp = 'biomesoplenty'
    let ew = 'enchanted'
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    
    let items = [
        [`${mc}:stick`, 8],
        [`${mc}:bread`, 7],
        [`${mc}:apple`, 6],
        [`${mc}:iron_nugget`, 5],
        [`${mc}:redstone`, 4],
        [`${mc}:paper`, 2],
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_stronghold'), items)
})