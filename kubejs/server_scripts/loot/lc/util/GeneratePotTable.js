// Modifies a given table to have a single pool which selects one random entry, where each entry
// has the same count and differs only in weight. An empty entry is automatically added with a
// weight corresponding to about 15% probability of being selected.
//
// args:
//  table   MutableLootTable        the table to modify
//  items   List<(item, weight)>    the items and their weights to add to the pool
// returns:
//  void
function GeneratePotPool(table, items) {
    GeneratePotPoolWithSpecifics(table, [3, 7], .15, items)
}
// Modifies a given table to have a single pool which selects one random entry, where each entry
// has the same count and differs only in weight. An empty entry is automatically added with a
// weight corresponding to about 15% probability of being selected.
//
// args:
//  table           MutableLootTable        the table to modify
//  count           NumberProvider          the count of each item
//  emptyChance     float                   the probability of the empty entry being selected
//  items           List<(item, weight)>    the items and their weights to add to the pool
// returns:
//  void
function GeneratePotPoolWithSpecifics(table, count, emptyChance, items) {
    table.clear()
    table.createPool(pool => {
        let wt = 0
        for(let [item, weight] of items) {
            pool.addEntry(LootEntry.of(item, count).withWeight(weight))
            wt += weight
        }
        if(emptyChance > 0)
            pool.addEntry(LootEntry.empty().withWeight(Math.ceil(emptyChance * wt)))
    })
}