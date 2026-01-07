LootJS.lootTables(e => {    
    let rawSupplies = [
        ['minecraft:stick',         [3, 5],     5],
        ['minecraft:coal',          [3, 5],     4],
        ['minecraft:wheat',         [3, 5],     3],
        ['minecraft:flint',         [3, 5],     2],
        ['minecraft:feather',       [3, 5],     2],
    ]
    e.create('lc:tables/structure/dungeoncrawl/dungeon/raw_supplies').createPool(pool => {
        for(let [itemId, count, weight] of rawSupplies) {
            pool.addEntry(LootEntry.of(itemId, count).withWeight(weight))
        }
    })
})