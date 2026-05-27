LootJS.lootTables(e => {
    let mc = 'minecraft'
    let sm = 'scriptor'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${tf}:entities/lich`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${sm}:tome_tier4`))
    })
})