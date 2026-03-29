LootJS.lootTables(e => {    
    let rareSupplies = [
        ['supplementaries:sack',        5],
        ['minecraft:bucket',            4],
        ['minecraft:bundle',            3],
        ['minecraft:compass',           1],
        ['minecraft:clock',             1],
        ['supplementaries:altimeter',   1],
    ]
    e.create('lc:tables/structure/dungeoncrawl/dungeon/rare_supplies').createPool(pool => {
        for(let [itemId, weight] of rareSupplies) {
            pool.addEntry(LootEntry.of(itemId).withWeight(weight))
        }
        pool.addEntry(LootEntry.reference('lc:tables/general/navigation/chalk_with_box').withWeight(3))
    })
})