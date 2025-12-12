// creates a group with a fixed maximum count per item
//
// items            ResourceLocation[]  the registry names of the items to add to the table
// max_ct           int                 the maximum count of each item
//
// returns: the newly-created group.           
function create_group_fixed_ct(items, max_ct) {
    let entries = []
    for(let item of items) {
        entries.push(LootEntry.of(item, [1, max_ct]))
    }
    return LootEntry.group(entries)
}
// creates a subtable where each item may have a different maximum count
//
// items            (RL, int)[]         the registry names of the items to add to the table, paired with their corresponding maximum counts
//
// returns: the newly-created group.
function create_group(items) {
    let entries = []
    for(let [item, ct] of items) {
        entries.push(LootEntry.of(item, [1, ct]))
    }
    return LootEntry.group(entries)
}
function create_subtreasure_subtable(e, village_name, colors, tools) {
    let table_path = `lc:tables/autogen/village/${village_name}/colorful`
    e.create(table_path)
     .createPool(pool => {
        let chalks = [], sacks = [LootEntry.of('supplementaries:sack')], bundles = [LootEntry.of('minecraft:bundle').withWeight(2)]
        for(let color of colors) {
            chalks.push(LootEntry.of(`chalk:${color}_chalk`).withWeight(3))
            bundles.push(LootEntry.of(`minecraft:${color}_bundle`).withWeight(2))
            sacks.push(LootEntry.of(`suppsquared:sack_${color}`).withWeight(1))
        }
        pool.addEntry(LootEntry.group(chalks))
        pool.addEntry(LootEntry.group(sacks))
        pool.addEntry(LootEntry.group(bundles))
        let tool_grp = []
        for(let [tool, weight] of tools) {
            tool_grp.push(LootEntry.of(tool).damage([0.3, 0.6]).withWeight(weight))
        }
        pool.addEntry(LootEntry.group(tool_grp))
     })
    return table_path
}
function create_artifacts_subtable(e, village_name, artifacts) {
    let table_path = `lc:tables/autogen/village/${village_name}/artifacts`
    e.create(table_path)
     .createPool(pool => {
        for(let [artifact, weight] of artifacts) {
            pool.addEntry(LootEntry.of(artifact).withWeight(weight))
        }
     })
    return table_path
}
// god i wish KubeJS supported TS but it errors every time i try
// 
// e                LootTableEventJS    the event to create tables in
// table            MutableLootTable    the parent table to modify
// name             string              the village name used to create identifiers
// crops            ResourceLocation[]  seeds and products local to the village
// flora            (RL, int)[]         flora local to the village and their max count
// food             (RL, int)[]         cooked food, like bread, mushroom stew, pumpkin pie
// products         (RL, int)[]         local products, like clay or green dye
// colors           string[]            colors the sacks and bundles should be
// artifacts        (RL, int)[]         artifacts which may spawn in the village and their weights
// tools            (RL, int)[]         tools which may spawn in the village and their weights
//
// returns:         MutableLootTable    the modified table, which can have more stuff added (e.g. photographs)
function assembleVillageLoot(e, table, name, crops, flora, food, products, colors, artifacts, tools) {
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 8])
        pool.addEntry(create_group_fixed_ct(crops, 5))
        pool.addEntry(create_group(flora))
        pool.addEntry(create_group(food))
        pool.addEntry(create_group(products))
        pool.addEntry(LootEntry.of('minecraft:emerald', [1, 4]))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.empty()                                                         .withWeight(12))
        pool.addEntry(LootEntry.reference(create_subtreasure_subtable(e, name, colors, tools))  .withWeight(5))
        pool.addEntry(LootEntry.reference(create_artifacts_subtable(e, name, artifacts))        .withWeight(1))
    })
    return table
}