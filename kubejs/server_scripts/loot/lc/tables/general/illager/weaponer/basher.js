LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/illager/weaponer/basher')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).damage([0.85, 1]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:shield`).damage([0.85, 1]).withWeight(6))
        pool.addEntry(LootEntry.of(`${bw}:stone_club`).damage([0.85, 1]).withWeight(2))
        pool.addEntry(LootEntry.of(`${bw}:steel_hammer`).damage([0.35, 0.85]).withWeight(1))
    })
})