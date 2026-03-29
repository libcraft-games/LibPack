LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/treasurer/vaultager').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:goat_horn`).withWeight(10).jsonFunction({
            function: `${mc}:set_instrument`,
            options: `#${mc}:regular_goat_horns` 
        }))
        pool.addEntry(LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantWithLevels([15, 25]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})