LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let bw = 'basicweapons'
    let cd = 'createdeco'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ec = 'enchanted'
    let table = e.getLootTable('nova_structures:chests/creeping_crypt/crypt_grave')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [7, 12]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 8]).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:bomb`, [2, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:tnt`, [2, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:nugget_uranium`, [7, 12]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:gunpowder_barrel`, [1, 3]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 4]).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(45))
        pool.addEntry(LootEntry.of(`${mc}:creeper_banner_pattern`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:kitty_slippers`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:shock_pendant`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:pocket_piston`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:panic_necklace`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:creeper_head`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ec}:creeper_heart`).withWeight(1))        
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [9, 13]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:moss_block`, [3, 9]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [6, 15]).withWeight(3))
    })
})