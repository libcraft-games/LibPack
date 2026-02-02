LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/shipwreck_supply`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([5, 10])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/supply/provisions').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/supply/supplies').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/supply/armor').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/supply/tools').withWeight(2))
    })
})