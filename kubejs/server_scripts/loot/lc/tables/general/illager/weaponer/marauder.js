LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.create('lc:tables/general/illager/weaponer/marauder')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${ii}:platinum_infused_hatchet`).damage([0.65, 1]).withWeight(2))
        pool.addEntry(LootEntry.of(`${bw}:steel_glaive`).damage([0.85, 1]).enchantWithLevels([10, 25]).withWeight(1))
    })
})