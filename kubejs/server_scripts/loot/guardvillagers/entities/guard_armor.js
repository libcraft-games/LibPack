LootJS.lootTables(e => {
    let bw = 'basicweapons', gv = 'guardvillagers', ie = 'immersiveengineering'
    let table = e.getLootTable(`${gv}:entities/guard_armor`)
    let pool = table.getPool(1)
    let weapons = [
        `${bw}:iron_spear`,
        `${bw}:iron_glaive`,
        `${ie}:sword_steel`
    ]
    for(let weapon of weapons) {
        pool.addEntry(LootEntry.of(weapon))
    }
})