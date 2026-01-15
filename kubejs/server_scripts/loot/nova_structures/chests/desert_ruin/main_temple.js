LootJS.lootTables(e => {
    let mc = 'minecraft'
    let path = 'nova_structures:chests/desert_ruins/desert_ruin_main_temple'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [8, 12]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [8, 10]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [6, 12]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 3]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(19).enchantRandomly('nova_structures:outreach'))
        pool.addEntry(LootEntry.of(`${mc}:dune_armor_trim_smithing_template`).withWeight(19))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_relic`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/artifacts_2').withWeight(1))
    })
})