LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${ii}:chests/labyrinth_map`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 10]).withWeight(32))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [1, 5]).withWeight(16))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 6]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:map`).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:slice_map`).withWeight(3))
        pool.addEntry(LootEntry.of(`${ii}:lost_candle`).withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(1))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(1))
    })
    table.createPool(pool => {
        // todo: more structures
        pool.addEntry(LootEntry.reference('nova_structures:maps/badlands_miner_outpost').withWeight(5))
        pool.addEntry(LootEntry.reference('nova_structures:maps/witch_villa').withWeight(5))
        pool.addEntry(LootEntry.reference('nova_structures:maps/illager_manor').withWeight(4))
        pool.addEntry(LootEntry.reference('nova_structures:maps/illager_hideout').withWeight(4))
        pool.addEntry(LootEntry.reference('nova_structures:maps/creeping_crypt').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/trident_trial_monument').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/jungle_ruin').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/undead_crypt').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/toxic_lair').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/desert_ruin').withWeight(3))
        pool.addEntry(LootEntry.reference('nova_structures:maps/ancient_city').withWeight(2))
        pool.addEntry(LootEntry.reference('nova_structures:maps/lone_citadel').withWeight(1))
    })
})