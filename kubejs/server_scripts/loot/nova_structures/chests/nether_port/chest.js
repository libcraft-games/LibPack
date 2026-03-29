LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let dp = 'create_dragons_plus'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'

    let table = e.getLootTable('nova_structures:chests/nether_port/nether_port_chest')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/nether_port/supplies_1'))
        pool.addEntry(LootEntry.reference('lc:tables/structure/nova_structures/nether_port/supplies_2'))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.empty().withWeight(60))
        pool.addEntry(LootEntry.of(`${mc}:blaze_rod`, [2, 5]).withWeight(35))
        pool.addEntry(LootEntry.of(`${mc}:rib_armor_trim_smithing_template`).withWeight(20))
        pool.addEntry(LootEntry.of(`${dp}:blaze_upgrade_smithing_template`).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:netherite_upgrade_smithing_template`).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 3]).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:wither_skeleton_skull`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:saddle`).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:diamond_pickaxe`).withWeight(2).enchantWithLevels([5, 15]).damage([0.5, 0.8]))
        pool.addEntry(LootEntry.of(`${mc}:bow`).withWeight(2).enchantRandomly('nova_structures:ghasted').enchantWithLevels([5, 15]).damage([0.5, 0.8]))
        pool.addEntry(LootEntry.of(`${bw}:diamond_quarterstaff`).withWeight(2).enchantWithLevels([5, 15]).damage([0.5, 0.8]))
        pool.addEntry(LootEntry.of(`${a}:strider_shoes`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantRandomly('nova_structures:wither_coated'))
        pool.addEntry(LootEntry.of(`${a}:withered_bracelet`).withWeight(1))
    })
})