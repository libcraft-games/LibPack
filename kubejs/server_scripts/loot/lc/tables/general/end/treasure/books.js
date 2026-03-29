LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let es = 'enderscape'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let su = 'supplementaries'
    e.create('lc:tables/general/end/treasure/books').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(49).enchantRandomly([
            `${mc}:feather_falling`,
            `${ns}:gravity`,
            `${mc}:mending`,
            `${ns}:outreach`,
            `${su}:stasis`,
            `${ns}:wax_wings`,
        ]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(7).enchant(builder => {
            builder.withEnchantment(`${es}:lightspeed`, 1)
        }))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(7).enchantRandomly([`${es}:rebound`]))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantRandomly([`${es}:transdimensional`]))
    })
})