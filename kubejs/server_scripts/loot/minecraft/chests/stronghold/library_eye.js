LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('minecraft:chests/stronghold/library_eye')
    
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('minecraft:chests/stronghold/library_bookshelf'))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:eye_armor_trim_smithing_template`))
    })
})