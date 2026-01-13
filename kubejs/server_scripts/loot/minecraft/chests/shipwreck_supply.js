LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/shipwreck_supply`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([5, 10])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/provisions').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/supplies').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/armor').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/shipwreck/tools').withWeight(2))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:coast_armor_trim_smithing_template`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ee}:scan_pincushion_filter`).withWeight(1))
    })
})