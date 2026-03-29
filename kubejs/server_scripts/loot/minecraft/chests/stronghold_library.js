// note that this table is used outside of strongholds:
// - injected (by Scriptor, i think) into Illager Mansion libraries
// - in Towns & Towers structures:
//      - Outpost Village
//      - Swiss Village Cartographer House
//      - Pillager Outpost Iberian
// with the Dungeons & Taverns rework, it doesn't seem to actually appear in strongholds
LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold_library')
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 8])
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:paper`, [2, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(2).enchantWithLevels([10, 20]))
        pool.addEntry(LootEntry.of(`${mc}:map`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2'))
    })
})