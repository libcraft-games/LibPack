LootJS.lootTables(e => { 
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/rare')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:wild_armor_trim_smithing_template`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`).withWeight(3))
    })
})