LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_weaponry')
    table.clear()

    function process(entry) {
        return entry.enchantWithLevels([10, 15]).damage([0.7, 1])
    }

    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(process(LootEntry.of(`${mc}:iron_axe`)).withWeight(5))
        pool.addEntry(process(LootEntry.of(`${mc}:crossbow`)).withWeight(5))
        pool.addEntry(process(LootEntry.of(`${mc}:iron_sword`)).withWeight(4))
        pool.addEntry(process(LootEntry.of(`${bw}:iron_club`)).withWeight(3))
        pool.addEntry(process(LootEntry.of(`${bw}:iron_glaive`)).withWeight(3))
        pool.addEntry(process(LootEntry.of(`${mc}:iron_helmet`)).withWeight(1))
        pool.addEntry(process(LootEntry.of(`${mc}:iron_chestplate`)).withWeight(1))
        pool.addEntry(process(LootEntry.of(`${mc}:iron_leggings`)).withWeight(1))
        pool.addEntry(process(LootEntry.of(`${mc}:iron_boots`)).withWeight(1))
        pool.addEntry(process(LootEntry.of(`${ae}:iron_gloves`)).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 5])
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]).withWeight(25))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [1, 5]).withWeight(15).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [1, 5]).withWeight(5).addPotion(`${mc}:harming`))
        pool.addEntry(LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(1))
    })
})