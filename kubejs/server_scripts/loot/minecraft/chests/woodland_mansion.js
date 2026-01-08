LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/woodland_mansion`)
    table.clear()
    table.createPool(pool => {
        // treasure
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/mansion/treasure').withWeight(26))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(13))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/musicker').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/marauder').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(24))
    })
    table.createPool(pool => {
        // filler
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(7)) 
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/preserves').withWeight(6))   
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sweets').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(3))       
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/gardener/basic').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/pillager').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/basher').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*woodland_mansion.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*woodland_mansion.*/)
})