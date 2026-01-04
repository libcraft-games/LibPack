// e                LootTableEventJS    the event to create tables in
// stage            int                 the floor which is being modified
// resources        List<(string, int)> the resource table names and tiers (see lc/tables/autogen/resource_tables.js) which spawn resources 
// returns:         MutableLootTable    the modified table, which can have more stuff added (e.g. photographs)
function assembleDungeonLoot(table, stage, resources, armors, weapons, tools) {
    table.clear()
    // rewards
    table.createPool(pool => {
        pool.rolls([0, 3])
        for(let [resource, tier] of resources)
            pool.addEntry(LootEntry.reference(`lc:tables/autogen/resources/${resource}/tier/${tier}`).withWeight(3 * (5 - tier)).withQuality(tier))
        pool.addEntry(LootEntry.of('minecraft:book').enchantWithLevels([stage * 5 + 5, stage * 5 + 15]))
    })
    return table
}