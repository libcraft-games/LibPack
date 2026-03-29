LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/library_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(32))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:leather`, [1, 3]).withWeight(4),
            LootEntry.of(`${mc}:feather`, [1, 4]).withWeight(4),
            LootEntry.of(`${mc}:ink_sac`, [1, 2]).withWeight(4),
            LootEntry.of(`${mc}:writable_book`).withWeight(2),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:lapis_lazuli`, [4, 8]).withWeight(5),
            LootEntry.of(`${mc}:amethyst_shard`, [3, 5]).withWeight(4),
            LootEntry.of(`${mc}:vex_armor_trim_smithing_template`).withWeight(3),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels([5, 10]),
            LootEntry.of(`${mc}:book`).withWeight(1).enchantWithLevels([30, 45])
        ]))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3'))
    })
})