LootJS.lootTables(e => {
    let af = 'artifacts'
    let he = 'horseexpert'
    let im = 'immersive_melodies'
    let mc = 'minecraft'
    e.create('lc:tables/structure/dungeoncrawl/dungeon/treasure/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${im}:triangle`).withWeight(10))
        pool.addEntry(LootEntry.of(`${im}:trumpet`).withWeight(9))
        pool.addEntry(LootEntry.of(`${he}:monocle`).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:saddle`).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:golden_horse_armor`).withWeight(6))
        pool.addEntry(LootEntry.of(`createaddition:electrum_amulet`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:cross_necklace`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:golden_hook`).withWeight(1))
        pool.addEntry(LootEntry.of(`create:brass_hand`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:power_glove`).withWeight(1))
        pool.addEntry(LootEntry.of(`${af}:fire_gauntlet`).withWeight(1))
    })
})