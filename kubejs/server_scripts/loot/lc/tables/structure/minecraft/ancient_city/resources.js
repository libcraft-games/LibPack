LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let table = e.create('lc:tables/structure/minecraft/ancient_city/resources')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:coal`, [6, 15]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:book`, [3, 10]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantRandomly(`${mc}:swift_sneak`))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:glow_berries`, [1, 15]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:glow_ink_sac`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [1, 15]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:ingot_lead`, [1, 15]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:warning_sign_warden`).withWeight(1))
    })
})