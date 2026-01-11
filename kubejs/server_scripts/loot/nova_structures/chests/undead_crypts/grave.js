LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let bw = 'basicweapons'
    let cd = 'createdeco'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/undead_crypts_grave')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:ash`, [3, 13]).withWeight(6))
        pool.addEntry(LootEntry.of(`${cd}:gold_coin`, [7, 12]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 8]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:nugget_silver`, [7, 12]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cd}:brass_coin`, [7, 24]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 4]).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(13))
        pool.addEntry(LootEntry.of(`${ae}:iron_pendant`).withWeight(12))
        pool.addEntry(LootEntry.of(`${ae}:golden_pendant`).withWeight(6))
        pool.addEntry(LootEntry.of(`${a}:thorn_pendant`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:shock_pendant`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:iron_sword`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(5),
            LootEntry.of(`${bw}:iron_dagger`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(5),
            LootEntry.of(`${mc}:iron_axe`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(5),
            LootEntry.of(`${bw}:iron_hammer`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(5),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${ie}:sword_steel`).damage([0.45, 0.95]).enchantWithLevels([-15, 10]).withWeight(4),
            LootEntry.of(`${bw}:steel_dagger`).damage([0.45, 0.95]).enchantWithLevels([-15, 10]).withWeight(4),
            LootEntry.of(`${ie}:axe_steel`).damage([0.45, 0.95]).enchantWithLevels([-15, 10]).withWeight(4),
            LootEntry.of(`${bw}:steel_hammer`).damage([0.45, 0.95]).enchantWithLevels([-15, 10]).withWeight(4),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:chainmail_helmet`).damage([0.45, 0.95]).enchantWithLevels([10, 25]).withWeight(4),
            LootEntry.of(`${mc}:chainmail_chestplate`).damage([0.45, 0.95]).enchantWithLevels([10, 25]).withWeight(4),
            LootEntry.of(`${mc}:chainmail_leggings`).damage([0.45, 0.95]).enchantWithLevels([10, 25]).withWeight(4),
            LootEntry.of(`${mc}:chainmail_boots`).damage([0.45, 0.95]).enchantWithLevels([10, 25]).withWeight(4),
            LootEntry.of(`${ae}:chainmail_gloves`).damage([0.45, 0.95]).enchantWithLevels([10, 25]).withWeight(4),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:iron_helmet`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(3),
            LootEntry.of(`${mc}:iron_chestplate`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(3),
            LootEntry.of(`${mc}:iron_leggings`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(3),
            LootEntry.of(`${mc}:iron_boots`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(3),
            LootEntry.of(`${ae}:iron_gloves`).damage([0.45, 0.95]).enchantWithLevels([5, 20]).withWeight(3),
        ]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:skeleton_skull`).withWeight(75))
        pool.addEntry(LootEntry.of(`${mc}:zombie_head`).withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:bone`, [6, 15]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`, [9, 13]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:leather`, [3, 5]).withWeight(1))
    })
})