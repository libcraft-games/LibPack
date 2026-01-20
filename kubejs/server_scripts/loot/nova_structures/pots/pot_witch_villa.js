LootJS.lootTables(e => {
    let ew = 'enchanted'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:pots/pot_witch_villa')
    table.clear()
    table.createPool(pool => {
        let items = [
            [`${mc}:sugar`, 8],
            [`${mc}:spider_eye`, 7],
            [`${mc}:slime_ball`, 6],
            [`${mc}:emerald`, 5],
            [`${ew}:belladonna_flower`, 4],
            [`${mc}:rabbit_foot`, 3],
            [`${mc}:redstone`, 2],
            [`${mc}:glowstone_dust`, 1]
        ]
        let wt = 0
        for(let [item, weight] of items) {
            pool.addEntry(LootEntry.of(item, [3, 7]).withWeight(weight))
            wt += weight
        }
        pool.addEntry(LootEntry.empty().withWeight(Math.floor(wt * 0.15)))
    })
})