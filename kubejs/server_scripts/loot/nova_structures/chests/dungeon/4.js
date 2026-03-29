// spotted in: badlands miner outpost kitchen
// by default consists of bowl (1, guaranteed) + random wheat/mushroom/bread type food + simple dungeon loot
LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/dungeon_4')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:brown_mushroom`, [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:red_mushroom`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:bowl`, [1, 4]).withWeight(1))
    })
})