LootJS.lootTables(e => {
    let a  = 'artifacts'    
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/artifacts_2')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${sa}:spider_amulet`).withWeight(36))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(30))
        pool.addEntry(LootEntry.of(`${a}:cross_necklace`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:crystal_heart`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:digging_claws`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:everlasting_beef`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:totem_of_undying`).withWeight(1))
    })
})