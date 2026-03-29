function AssembleVillageProfessionLoot(table, commonItems, rareItems) {
    let mc = 'minecraft'

    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        let wt = 0
        for(let [entry, weight] of commonItems) {
            weight *= 4
            pool.addEntry(entry.withWeight(weight))
            wt += weight
        }
        pool.addEntry(LootEntry.of(`${mc}:emerald`).withWeight(Math.ceil(wt / 7)))
    })
    table.createPool(pool => {
        pool.rolls(3)
        let wt = 0
        for(let [entry, weight] of rareItems) {
            pool.addEntry(entry.withWeight(weight))
            wt += weight
        }
        pool.addEntry(LootEntry.empty().withWeight(Math.ceil(wt / 2)))
    })
}