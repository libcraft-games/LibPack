LootJS.lootTables(e => {
    let lc = 'libcraft'
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:spawners/nether_keep/spawner_keep_ominous')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:coal_block`, 2).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:bone_block`, 3).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:blaze_rod`, 4).withWeight(10))
        pool.addEntry(NovaStructuresKeys.nether_keep.withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:crying_obsidian`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(6).enchantRandomly(`nova_structures:wither_coated`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(6).addPotion(`${mc}:strong_regeneration`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:long_fire_resistance`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(3).addPotion(`${lc}:strong_wither`))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, 4).withWeight(3).addPotion(`${lc}:strong_wither`))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
    })
})