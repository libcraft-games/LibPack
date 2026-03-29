LootJS.lootTables(e => {
    let lc = 'libcraft'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/nether_keep/bridge')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:coal`, 5).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:bone`, 3).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:blaze_powder`, 4).withWeight(10))
        pool.addEntry(NovaStructuresKeys.nether_keep.withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:quartz`, 3).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, 3).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(6).enchantRandomly(`nova_structures:wither_coated`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(6).addPotion(`${mc}:regeneration`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:fire_resistance`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(3).addPotion(`${lc}:wither`))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, 8).withWeight(3).addPotion(`${lc}:wither`))
        pool.addEntry(LootEntry.of(`${mc}:wither_rose`).withWeight(2))
    })
})