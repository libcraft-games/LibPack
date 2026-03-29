LootJS.lootTables(e => {
    let a  = 'artifacts'
    let es = 'enderscape'
    let im = 'immersive_melodies'
    let mc = 'minecraft'
    e.create('lc:tables/general/piglin/treasure/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of(`${im}:bagpipe`).withWeight(4))
        pool.addEntry(LootEntry.of(`${a}:plastic_drinking_hat`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:onion_ring`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:fire_gauntlet`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:flame_pendant`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:novelty_drinking_hat`).withWeight(1))
    })
})