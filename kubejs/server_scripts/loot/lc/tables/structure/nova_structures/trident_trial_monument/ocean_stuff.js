LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ps = 'permanentsponges'
    let table = e.create('lc:tables/structure/nova_structures/trident_trial_monument/ocean_stuff')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:sponge`, 5).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_shard`, 7).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`, 5).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:prismarine`, 6).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:sea_lantern`, 4).withWeight(2))
        pool.addEntry(LootEntry.of(`${ps}:aqueous_sponge`).withWeight(1))
    })
})