LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/map_chest`)

    let maps = [
        ['pillager_outpost', 8],
        ['badlands_miner_outpost', 7],
        ['illager_fort', 7],
        ['sorcerer_hut', 6],
        ['illusioner_tower', 5],
        ['labyrinth', 4],
        ['witch_villa', 3],
        ['illager_hideout', 2],
        ['ancient_city', 1]
    ]

    table.clear()
    table.createPool(pool => {        
        pool.rolls([1, 2])
        for(let [key, weight] of maps)
            pool.addEntry(CreateExplorationMapEntryFromData(key).withWeight(weight))
    })
    table.createPool(pool => {
        pool.rolls([5, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper'))
    })
})