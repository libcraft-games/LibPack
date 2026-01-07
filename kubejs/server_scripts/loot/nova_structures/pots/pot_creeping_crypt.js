LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:pots/pot_creeping_crypt')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [4, 13]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:moss_block`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:ash`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:nugget_uranium`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:bomb`, [1, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:black_dye`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:green_dye`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:lime_dye`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:light_gray_dye`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
    })
})