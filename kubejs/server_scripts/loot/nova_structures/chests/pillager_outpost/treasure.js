LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/pillager_outpost_treasure')
    table.clear()
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sweets').withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(60))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(45))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).damage([0.75, 1]).enchantRandomly().withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly(`#${ns}:illagers_bane`).withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(1))
    })
    table.createPool(pool => {
        // todo: illager invasion stuff
        pool.addEntry(CreateExplorationMapEntryFromData('badlands_miner_outpost').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('witch_villa').withWeight(3))
        pool.addEntry(CreateExplorationMapEntryFromData('illager_manor').withWeight(1))
        pool.addEntry(CreateExplorationMapEntryFromData('illager_hideout').withWeight(4))
    })
})