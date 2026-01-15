LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${su}:loot/galleon/chest`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`).withWeight(48).enchantRandomly().damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(36).enchantRandomly().damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${mc}:spyglass`).withWeight(24))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(18).addPotion(`${mc}:leaping`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(18).addPotion(`${mc}:slow_falling`))
        pool.addEntry(LootEntry.of(`${a}:cloud_in_a_bottle`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:bunny_hoppers`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:umbrella`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${su}:rope`, [3, 8]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [4, 13]).withWeight(6))
        pool.addEntry(LootEntry.of(`${su}:rope_arrow`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:phantom_membrane`, [1, 2]).withWeight(1))
    })
})