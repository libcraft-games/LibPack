LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let ug = 'undergarden'
    let table = e.getLootTable('minecraft:chests/stronghold/jail')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/base').withWeight(20))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:chain`, [2, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:iron_bars`, [1, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [5, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:lever`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${lc}:resistance`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).withWeight(3).addPotion(`${ug}:long_featherweight`))
    })
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.empty().withWeight(55))
        pool.addEntry(LootEntry.of(`${mc}:iron_sword`).withWeight(10).damage([0.45, 0.85]).enchantRandomly(`${mc}:knockback`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${bw}:iron_club`).withWeight(10).damage([0.45, 0.85]).enchantRandomly(`${mc}:knockback`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(5).damage([0.45, 0.85]).enchantRandomly(`${mc}:multishot`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:shield`).withWeight(5).damage([0.45, 0.85]).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:eye_armor_trim_smithing_template`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:iron_helmet`).withWeight(3).damage([0.45, 0.85]).enchantRandomly(`${mc}:protection`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_chestplate`).withWeight(3).damage([0.45, 0.85]).enchantRandomly(`${mc}:protection`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_leggings`).withWeight(3).damage([0.45, 0.85]).enchantRandomly(`${mc}:protection`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${mc}:iron_boots`).withWeight(3).damage([0.45, 0.85]).enchantRandomly(`${mc}:protection`).enchantWithLevels(10))
        pool.addEntry(LootEntry.of(`${a}:night_vision_goggles`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:pocket_piston`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:steadfast_spikes`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:thorn_pendant`).withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['vaulttec', 'warbird', 'vanguard'])).withWeight(1))
    })
})