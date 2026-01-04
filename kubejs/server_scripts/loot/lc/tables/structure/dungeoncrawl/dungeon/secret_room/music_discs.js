LootJS.lootTables(e => {
    let mc = 'minecraft', cc = 'create_connected'
    // List<(namespace, name, weight, quality)>
    let discs = [
        [mc, 'cat',             1, 1],
        [mc, 'blocks',          2, 1],
        [mc, 'chirp',           2, 1],
        [mc, 'far',             2, 1],
        [mc, 'mall',            2, 1],
        [mc, 'mellohi',         1, 3],
        [mc, 'stal',            1, 3],
        [mc, 'strad',           1, 3],
        [mc, 'ward',            1, 3],
        [mc, '11',              2, 0],
        [mc, 'wait',            2, 1],
        [cc, 'elevator',        1, 1],
        [cc, 'interlude',       1, 1],
        [mc, '13',              2, 0],
        [mc, 'lava_chicken',    1, 0],
    ]
    e.create('lc:tables/structure/dungeoncrawl/dungeon/secret_room/music_discs').createPool(pool => {
        for(let [namespace, name, weight, quality] of discs) {
            pool.addEntry(LootEntry.of(`${namespace}:music_disc_${name}`).withWeight(weight).withQuality(quality))
        }
    })
})