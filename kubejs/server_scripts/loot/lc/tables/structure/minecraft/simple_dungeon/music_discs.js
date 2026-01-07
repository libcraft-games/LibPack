LootJS.lootTables(e => {
    let mc = 'minecraft', cc = 'create_connected'
    // List<(namespace, name, weight, quality)>
    let discs = [
        [mc, '13',              1, 0],
        [mc, 'cat',             1, 0],
        [mc, 'blocks',          1, 1],
        [mc, 'chirp',           1, 1],
        [mc, 'strad',           1, 2],
        [mc, '11',              2, 0],
    ]
    e.create('lc:tables/structure/minecraft/simple_dungeon/music_discs').createPool(pool => {
        for(let [namespace, name, weight, quality] of discs) {
            pool.addEntry(LootEntry.of(`${namespace}:music_disc_${name}`).withWeight(weight).withQuality(quality))
        }
    })
})