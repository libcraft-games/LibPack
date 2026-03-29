LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ps = 'permanentsponges'
    let table = e.create('lc:tables/structure/nova_structures/trident_trial_monument/treasure_common')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:long_water_breathing`))
        pool.addEntry(EnchantWithLevelsAndTag(LootEntry.of(`${mc}:book`), 20, '#lc:structure_group/ocean').withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:tide_armor_trim_smithing_template`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:heart_of_the_sea`).withWeight(1))
    })
})