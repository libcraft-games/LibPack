LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/rare')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:wild_armor_trim_smithing_template`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels(30))
        pool.addEntry(LootEntry.of(`${ee}:color_convolve_filter`).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`).withWeight(3))
    })
})