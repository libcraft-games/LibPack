// can you tell i am losing it
LootJS.lootTables(e => {
    let a  = 'artifacts'
    let cd = 'create_dragons_plus'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.create('lc:tables/structure/minecraft/fortress/singles')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:flint_and_steel`).damage([0.5, 1]).withWeight(36))
        pool.addEntry(LootEntry.of(`${cd}:blaze_upgrade_smithing_template`).withWeight(30))
        pool.addEntry(LootEntry.of(`${mc}:netherite_upgrade_smithing_template`).withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:rib_armor_trim_smithing_template`).withWeight(18))
        pool.addEntry(LootEntry.of(`${mc}:diamond_horse_armor`).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_11`).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(12).enchantRandomly(`${ns}:wither_coated`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(6).enchantRandomly(`${ns}:antidote`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(6).enchantWithLevels([25, 35]))
        pool.addEntry(LootEntry.of(`${ee}:blobs_filter`).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:wither_rose`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
    })
})