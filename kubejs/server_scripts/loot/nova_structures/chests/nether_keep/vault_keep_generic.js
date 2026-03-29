LootJS.lootTables(e => {
    let dp = 'create_dragons_plus'
    let mc = 'minecraft'
    let ns = 'nova_structures'

    let table = e.getLootTable('nova_structures:chests/nether_keep/vault_keep_generic')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:coal`, 5).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:bone`, 5).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:quartz`, 3).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`, 3).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, 4).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:blaze_rod`, 2).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:crying_obsidian`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, 2).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(10))
        pool.addEntry(LootEntry.of(`${dp}:blaze_upgrade_smithing_template`).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:rib_armor_trim_smithing_template`).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:netherite_upgrade_smithing_template`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:wither_rose`, 2).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantRandomly(`${ns}:wither_coated`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantRandomly(`${ns}:ghasted`))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})