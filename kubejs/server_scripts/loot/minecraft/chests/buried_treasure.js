LootJS.lootTables(e => {
    let af = 'artifacts'
    let cd = 'culturaldelights'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/buried_treasure`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:heart_of_the_sea`))
    })
    table.createPool(pool => {
        pool.rolls([2, 5])
        pool.addEntry(LootEntry.of(`${mc}:seagrass`,            [1, 9]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, [1, 5]).withWeight(6).withQuality(1))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`,    [1, 5]).withWeight(3).withQuality(2))
        pool.addEntry(LootEntry.of(`${mc}:turtle_scute`,        [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:nautilus_shell`             ).withWeight(2).withQuality(3))
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.of(`${mc}:emerald`,     [1, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,  [1, 5]).withWeight(6).withQuality(1))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`,  [1, 5]).withWeight(6).withQuality(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`)            .withWeight(1).withQuality(2))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${cd}:pufferfish_roll`,     [2, 5]))
        pool.addEntry(LootEntry.of(`${fd}:salmon_roll`,         [2, 5]).withQuality(2))
        pool.addEntry(LootEntry.of(`${fd}:kelp_roll_slice`,     [3, 7]).withQuality(1))
        pool.addEntry(LootEntry.of(`${cd}:calamari_roll`,       [2, 5]).withQuality(1))
    })
    table.createPool(pool => {
        pool.rolls([0, 2])
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(2).addPotion(`${mc}:water_breathing`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).withQuality(1).addPotion(`${mc}:long_water_breathing`))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/buried_treasure/sea_stuff').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/buried_treasure/weapons').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/buried_treasure/artifacts'))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/buried_treasure/misc'))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*buried_treasure.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*buried_treasure.*/)
})