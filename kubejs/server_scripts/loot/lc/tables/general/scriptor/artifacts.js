LootJS.lootTables(e => {
    return
    e.create('lc:tables/general/scriptor/artifacts').createPool(pool => {
        pool.addEntry(LootEntry.of('scriptor:artifact_1').jsonFunction({
            function: 'scriptor:artifact'
        }))
    })
})