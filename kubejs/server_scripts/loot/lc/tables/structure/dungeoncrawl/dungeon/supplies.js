LootJS.lootTables(e => {    
    let supplies = [
        ['minecraft:torch',         [4, 12],    5],
        ['supplementaries:rope',    [3, 6],     1],
        ['minecraft:arrow',         [3, 5],     1],
        ['supplementaries:bomb',    [4, 7],     1],
    ]
    e.create('lc:tables/structure/dungeoncrawl/dungeon/supplies').createPool(pool => {
        for(let [itemId, count, weight] of supplies) {
            pool.addEntry(LootEntry.of(itemId, count).withWeight(weight))
        }
    })
})