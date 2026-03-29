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
        pool.addEntry(CreateExplorationMapEntryFromData('badlands_miner_outpost').withWeight(5))
        pool.addEntry(CreateExplorationMapEntryFromData('witch_villa').withWeight(5))
        pool.addEntry(CreateExplorationMapEntryFromData('illager_manor').withWeight(4))
        pool.addEntry(CreateExplorationMapEntryFromData('illager_hideout').withWeight(4))
        pool.addEntry(CreateExplorationMapEntryFromData('creeping_crypt').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('trident_trial_monument').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('jungle_ruins').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('undead_crypt').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('toxic_lair').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('desert_ruins').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('ancient_city').withWeight(2))
        pool.addEntry(CreateExplorationMapEntryFromData('lone_citadel').withWeight(1))
    })
})