// args:
//  pool    LootPoolBuilder
//  items   List<string, int>
function AddEntriesFromWeights(pool, items) {
    for(let [item, weight] of items) {
        pool.addEntry(LootEntry.of(item).withWeight(weight))
    }
}
function AddEntriesFromWeightsAndCts(pool, items) {
    for(let [item, maxCt, weight] of items) {
        pool.addEntry(LootEntry.of(item, [1, maxCt]).withWeight(weight))
    }
}
function AddPoolFromWeights(table, items) {
    table.createPool(pool => AddEntriesFromWeights(pool, items))
}