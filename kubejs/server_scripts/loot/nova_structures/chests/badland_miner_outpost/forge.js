LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    
    let table = e.getLootTable('nova_structures:chests/badland_miner_outpost_forge')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${ie}:pickaxe_steel`).withWeight(7).damage([0.7, 1]))
        pool.addEntry(LootEntry.of(`${ie}:shovel_steel`).withWeight(5).damage([0.7, 1]))
        pool.addEntry(LootEntry.of(`${ie}:axe_steel`).withWeight(5).damage([0.7, 1]))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, [
            'massfusion', 'sponsor',
            'astartes', 'eyas'
        ])).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:charcoal`, [3, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [3, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:coal_coke`, [2, 4]).withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [2, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [2, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:ingot_steel`, [1, 2]).withWeight(1))
    })
})