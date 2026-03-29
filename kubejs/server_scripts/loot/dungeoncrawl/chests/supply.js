LootJS.lootTables(e => {
    let mc = 'minecraft'
    let dc = 'dungeoncrawl'
    let su = `supplementaries`
    let bw = 'basicweapons'

    let table = e.getLootTable(`${dc}:chests/supply`)
    
    table.clear()
    // consumable supplies
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.of(`${mc}:torch`, [12, 32]).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:rope`, [8, 24]).withWeight(1))
    })
    // tools/weapons
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_pickaxe`).damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_sword`).damage([0.9, 1]).withWeight(3))
        pool.addEntry(LootEntry.of(`${bw}:stone_dagger`).damage([0.9, 1]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).damage([0.9, 1]).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:shield`).damage([0.9, 1]).jsonFunction({
                        function: `${dc}:shield`,
                        loot_level: 1
                     }))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of('minecraft:bow').damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:leather_helmet`).damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:leather_chestplate`).damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:leather_leggings`).damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:leather_boots`).damage([0.9, 1]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:quiver`))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`chalk:chalk_box`))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/navigation/chalk'))
    })
    table.createPool(pool => {
        pool.rolls([0, 1])
        pool.addEntry(LootEntry.of(`${su}:lunch_basket`).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:slingshot`).damage([0.9, 1]).withWeight(1))
        pool.addEntry(LootEntry.of(`${su}:slice_map`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${su}:bomb`, [3, 9]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:flint_and_steel`).damage([0.9, 1]).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [12, 36]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:sack`))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.of(`${mc}:mushroom_stew`, [1, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(1))
    })
})