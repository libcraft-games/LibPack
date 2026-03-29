LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/end_castle/spawner_endermite')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${ed}:uncanny_cookies`, 2).withWeight(4))
        pool.addEntry(LootEntry.of(`${ed}:mite_crust`, 2).withWeight(4))
        pool.addEntry(LootEntry.of(`${cf}:endermite_meatball_stick_1`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${lc}:ender_phasing`))
        pool.addEntry(LootEntry.of(`${cf}:endermite_meatball_stick_3`).withWeight(1))
    })
})