LootJS.lootTables(e => {
    let a = 'artifacts'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    for (let namespace of [mc, ns]) {
        let table = e.getLootTable(`${namespace}:chests/ancient_city`)
        table.clear()
        table.createPool(pool => {
            pool.rolls([2, 3])
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/filler').withWeight(1))
        })
        table.createPool(pool => {
            pool.rolls([2, 3])
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/sculk').withWeight(1))
        })
        table.createPool(pool => {
            pool.rolls([3, 5])
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/resources').withWeight(8))
            pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(4))
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/trims').withWeight(4))
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/discs').withWeight(4))
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/consumables').withWeight(3))
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/equipment').withWeight(3))
            pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/artifacts').withWeight(1))
            pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['twili', 'vaulttec', 'dominator', 'taken'])).withWeight(1))
            // todo: scriptor artifacts
        })
    }
})