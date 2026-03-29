LootJS.lootTables(e => {
    let a  = 'artifacts'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('minecraft:chests/stronghold/generic')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base').withWeight(20))
        pool.addEntry(LootEntry.of(`${cf}:apple_jam_sandwich`, [1, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${cf}:caramel_apple_slice`, [2, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:caramel_fudge`).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:apple_pie`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.empty().withWeight(55))
        pool.addEntry(LootEntry.of(`${mc}:iron_sword`).withWeight(10).damage([0.45, 0.85]).enchantWithLevels(15))
        pool.addEntry(LootEntry.of(`${mc}:iron_pickaxe`).withWeight(10).damage([0.45, 0.85]).enchantWithLevels(15))
        pool.addEntry(LootEntry.of(`${mc}:eye_armor_trim_smithing_template`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_helmet`).withWeight(3).damage([0.65, 1]).enchantWithLevels(25))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_chestplate`).withWeight(3).damage([0.65, 1]).enchantWithLevels(25))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_leggings`).withWeight(3).damage([0.65, 1]).enchantWithLevels(25))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_boots`).withWeight(3).damage([0.65, 1]).enchantWithLevels(25))
        pool.addEntry(LootEntry.of(`${mc}:iron_helmet`).withWeight(2).damage([0.45, 0.85]).enchantWithLevels(15))
        pool.addEntry(LootEntry.of(`${mc}:iron_chestplate`).withWeight(2).damage([0.45, 0.85]).enchantWithLevels(15))
        pool.addEntry(LootEntry.of(`${mc}:iron_leggings`).withWeight(2).damage([0.45, 0.85]).enchantWithLevels(15))
        pool.addEntry(LootEntry.of(`${mc}:iron_boots`).withWeight(2).damage([0.45, 0.85]).enchantWithLevels(15))
        for(let i = 1; i <= 4; i++)
            pool.addEntry(exposure_AgedPhoto(`stronghold/corridor_1`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:night_vision_goggles`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:warp_drive`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:crystal_heart`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:cross_necklace`).withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['vaulttec', 'warbird', 'vanguard'])).withWeight(1))
    })
})