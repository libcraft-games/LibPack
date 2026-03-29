LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    
    e.create('lc:tables/structure/minecraft/shipwreck/treasure/misc').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:coast_armor_trim_smithing_template`).withWeight(30))
        pool.addEntry(LootEntry.of(`${su}:globe_sepia`).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})