LootJS.lootTables(e => {
    let path = 'minecraft:chests/ruined_portal'
    let table = e.getLootTable(path)
    let mc = 'minecraft'
    let ee = 'exposure_expanded'
    let bw = 'basicweapons'
    let fd = 'farmersdelight'
    let ae = 'aether'
    let af = 'artifacts'
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 8])
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [1, 2]).withWeight(40))
        pool.addEntry(LootEntry.of(`${mc}:flint`, [1, 4]).withWeight(40))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [9, 18]).withWeight(40))
        pool.addEntry(LootEntry.of(`${mc}:flint_and_steel`).withWeight(40))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`).withWeight(40))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [4, 24]).withWeight(15))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:golden_sword`).enchantRandomly().withWeight(6),
            LootEntry.of(`${mc}:golden_axe`).enchantRandomly().withWeight(6),
            LootEntry.of(`${mc}:golden_hoe`).enchantRandomly().withWeight(6),
            LootEntry.of(`${mc}:golden_shovel`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_dagger`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_hammer`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_club`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_spear`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_quarterstaff`).enchantRandomly().withWeight(6),
            LootEntry.of(`${bw}:golden_glaive`).enchantRandomly().withWeight(6),
            LootEntry.of(`${fd}:golden_knife`).enchantRandomly().withWeight(6),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:golden_helmet`).enchantRandomly().withWeight(12),
            LootEntry.of(`${mc}:golden_chestplate`).enchantRandomly().withWeight(12),
            LootEntry.of(`${mc}:golden_leggings`).enchantRandomly().withWeight(12),
            LootEntry.of(`${mc}:golden_boots`).enchantRandomly().withWeight(12),
            LootEntry.of(`${ae}:golden_gloves`).enchantRandomly().withWeight(12),
        ]))
        pool.addEntry(LootEntry.of(`${mc}:glistering_melon_slice`, [4, 12]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:golden_horse_armor`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [4, 12]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [2, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bell`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:gold_block`, [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([0, 2])
        pool.addEntry(LootEntry.empty().withWeight(24))
        pool.addEntry(LootEntry.of(`${ee}:flip_filter`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ee}:wobble_filter`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:flame_pendant`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:obsidian_skull`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:fire_gauntlet`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:strider_shoes`).withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*ruined_portal.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*ruined_portal.*/)
})