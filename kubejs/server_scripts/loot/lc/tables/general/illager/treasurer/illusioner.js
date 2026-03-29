LootJS.lootTables(e => {
    let a = 'artifacts'
    let bop = 'biomesoplenty'
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/treasurer/illusioner').createPool(pool => {
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${bop}:magic_sapling`).withWeight(3),
            LootEntry.of(`${mc}:pale_oak_sapling`).withWeight(3),
            LootEntry.of(`${bop}:rainbow_birch_sapling`).withWeight(2),
            LootEntry.of(`${bop}:empyreal_sapling`).withWeight(1),
        ))        
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${a}:chorus_totem`).withWeight(2),
            LootEntry.of(`${a}:charm_of_shrinking`).withWeight(2),
            LootEntry.of(`${a}:scarf_of_invisibility`).withWeight(2),
        ))
    })
})