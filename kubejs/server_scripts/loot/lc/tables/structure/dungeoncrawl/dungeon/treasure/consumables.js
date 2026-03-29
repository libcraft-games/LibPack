LootJS.lootTables(e => {
    let af = 'artifacts'
    let he = 'horseexpert'
    let im = 'immersive_melodies'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    e.create('lc:tables/structure/dungeoncrawl/dungeon/treasure/consumables').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [4, 8]).withWeight(17))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(15))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`, [1, 3]).withWeight(13))
        pool.addEntry(LootEntry.of(`${sa}:broken_clock`).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:totem_of_undying`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:ancient_debris`).withWeight(1))
    })
})