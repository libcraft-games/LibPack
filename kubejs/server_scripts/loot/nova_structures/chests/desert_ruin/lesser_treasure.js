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
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/desert_ruin/specific_treasure').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/equipment').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.empty().withWeight(80))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(19).enchantRandomly('nova_structures:outreach'))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts_2').withWeight(1))
    })
})