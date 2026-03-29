LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/illager/weaponer/vindicator')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`).damage([0.85, 1]).enchantWithLevels([5, 15]).withWeight(4))
        pool.addEntry(LootEntry.of(`${bw}:iron_glaive`).damage([0.85, 1]).enchantWithLevels([5, 15]).withWeight(1))
    })
})