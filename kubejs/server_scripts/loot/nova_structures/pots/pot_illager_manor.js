LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:pots/pot_illager_manor')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/pot').withWeight(18))
        let dyes = []
        for(let color of ['black', 'gray', 'light_gray', 'green', 'cyan', 'red'])
            dyes.push(LootEntry.of(`${mc}:${color}_dye`, [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.group(dyes))        
    })
})