LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/pillager_outpost`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(3).damage([0.35, 1]))
        pool.addEntry(LootEntry.of(`${mc}:goat_horn`).withWeight(4).jsonFunction({
            function: `${mc}:set_instrument`,
            options: `#${mc}:regular_goat_horns` 
        }))
        pool.addEntry(LootEntry.of(`${mc}:sentry_armor_trim_smithing_template`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantRandomly())
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:string`, [1, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:tripwire_hook`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ee}:scan_pincushion_filter`).withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*pillager_outpost.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*pillager_outpost.*/)
}) 