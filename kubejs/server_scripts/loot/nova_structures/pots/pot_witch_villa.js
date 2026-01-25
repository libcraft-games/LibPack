LootJS.lootTables(e => {
    let bp = 'biomesoplenty'
    let ew = 'enchanted'
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    
    let items = [
        [`${fd}:rice_panicle`, 9],
        [`${ew}:wolfsbane_flower`, 7],
        [`${ew}:belladonna_flower`, 6],
        [`${mc}:sugar_cane`, 6],
        [`${bp}:reed`, 5],
        [`${bp}:cattail`, 5],
        [`${bp}:watergrass`, 5],
        [`${ew}:water_artichoke`, 5],
        [`${ew}:mandrake_root`, 5],
        [`${mc}:slime_ball`, 5],
        [`${mc}:sugar`, 5],
        [`${mc}:fermented_spider_eye`, 5],
        [`${ew}:tongue_of_dog`, 3],
        [`${ew}:wool_of_bat`, 3],
        [`${mc}:emerald`, 3],
        [`${mc}:redstone`, 2],
        [`${mc}:glowstone_dust`, 1]
    ]
    GeneratePotPool(e.getLootTable('nova_structures:pots/pot_witch_villa'), items)
})