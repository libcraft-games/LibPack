LootJS.lootTables(e => {
    let a  = 'artifacts'
    let es = 'enderscape'
    let im = 'immersive_melodies'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/treasure/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${im}:ender_bass`).withWeight(5))
        pool.addEntry(LootEntry.of(`${es}:mirror`).withWeight(4))
        pool.addEntry(LootEntry.of(`${a}:warp_drive`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:chorus_totem`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:charm_of_shrinking`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:scarf_of_invisibility`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:helium_flamingo`).withWeight(1))
    })
})