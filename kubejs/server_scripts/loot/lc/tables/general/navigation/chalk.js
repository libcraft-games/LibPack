// chalks
LootJS.lootTables(e => {
    function random_chalk(chance) {
        if(NumberProvider.binomial(1, 1 - chance))
            return {}
        let index = NumberProvider.uniform([0, 15])
        return {
            count: 1,
            id: `chalk:${global.libcraft.colors[index]}_chalk`
        }
    }
    e.create('lc:tables/general/navigation/chalk').createPool(pool => {
        for(let color of global.libcraft.colors)
            pool.addEntry(LootEntry.of(`chalk:${color}_chalk`).damage([0.5, 1]))
    })
    e.create("lc:tables/general/navigation/chalk_with_box").createPool(pool => {
        // all chalk colors with equal chance
        pool.addEntry(LootEntry.of('chalk:chalk_box').withWeight(1))
        for(let color of global.libcraft.colors) {
            pool.addEntry(LootEntry.of(`chalk:${color}_chalk`).withWeight(1).damage([0.5, 1]))
        }
        return
        // with lower chance (but with quality), chalk box with random chalks and glow berries
        pool.addEntry(
            LootEntry
                .of('chalk:chalk_box')
                .withWeight(1)
                .withQuality(1)
                .setCustomData({
                    'chalk:chalk_box_contents': {
                        glowing_uses: NumberProvider.uniform([0, 8]),
                        items: [
                            // first 8 slots: random chalk
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            random_chalk(0.5),
                            // last slot: 0-4 glow berries
                            {}
                        ]
                    }
                }))
    })
})