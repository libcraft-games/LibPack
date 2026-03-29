LootJS.lootTables(e => {
    for(let id of e.getLootTableIds()) {
        let table = e.getLootTable(id)
        if(id.namespace === 'exposure_expanded' 
           || id.path.includes('inject') 
           || table.getLootType() != LootType.CHEST)
            continue
        table.createPool(pool => {
            pool.addEntry(LootEntry.of(`biomesoplenty:null_plant`)
                                   .setName(Component.of('Debug Note').color('#ee6900').italic(false))
                                   .addLore(Component.of('Resource Location: ').gray()
                                                     .append(Component.of(id).white().italic(false))))
        })
    }
})