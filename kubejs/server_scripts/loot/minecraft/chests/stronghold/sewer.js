LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold/sewer')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 7])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base').withWeight(20))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${cf}:fishcake`, [2, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, [3, 6]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`, [2, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:glow_ink_sac`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:nautilus_shell`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.empty().withWeight(55))
        pool.addEntry(LootEntry.of(`${mc}:diamond_sword`).withWeight(10).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${bw}:diamond_spear`).withWeight(10).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:diamond_helmet`).withWeight(5).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:diamond_chestplate`).withWeight(5).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:diamond_leggings`).withWeight(5).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:diamond_boots`).withWeight(5).damage([0.35, 0.55]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:trident`).withWeight(1).damage([0.25, 0.5]))
        pool.addEntry(LootEntry.of(`${a}:snorkel`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:flippers`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:shock_pendant`).withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['vaulttec', 'trident', 'gaypride'])).withWeight(1))
    })
})