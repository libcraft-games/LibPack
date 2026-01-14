LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/ancient_city_raid_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/resources').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/sculk').withWeight(1))
    })
})