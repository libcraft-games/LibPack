LootJS.lootTables(e => {
    let mc = 'minecraft'
    let path = 'nova_structures:chests/desert_ruins/desert_ruin_lesser_treasure'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/filler').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(7))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/treasure').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [3, 13]).withWeight(80))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(19).enchantRandomly('nova_structures:outreach'))
        pool.addEntry(LootEntry.of(`${mc}:dune_armor_trim_smithing_template`).withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts_2').withWeight(1))
    })
})