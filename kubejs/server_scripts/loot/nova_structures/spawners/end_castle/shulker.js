LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/end_castle/spawner_shulker')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:chorus_fruit_jam_sandwich`, 1).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:shulker_shell`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(2).addPotion(`${lc}:levitation`))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [4, 8]).withWeight(2).addPotion(`${lc}:levitation`))
        pool.addEntry(LootEntry.of(`${ed}:ender_paella`).withWeight(1))
    })
})