// spotted in: remnant forest smith, remnant ruin smith
// by default consists of stone axe, shovel, hoe, 2-5 coal, 2-4 wheat + simple dungeon loot
LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_3')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:coal`, [2, 5]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:iron_pickaxe`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${mc}:iron_shovel`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${mc}:iron_hoe`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${bw}:iron_spear`).withWeight(2).damage([0.3, 0.7]))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:lava_bucket`).withWeight(1))
    })
})