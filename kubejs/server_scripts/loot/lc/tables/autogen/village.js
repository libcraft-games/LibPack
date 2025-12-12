// creates a subtable with a fixed maximum count for simple things like logs and crops
//
// e                LootTableEventJS    the event to create tables in
// village_name     string              the name of the village type (e.g. desert)
// table_name       string              the name of the table (e.g. crops)
// items            ResourceLocation[]  the registry names of the items to add to the table
// max_ct           int                 the maximum count of each item
//
// returns: the path to the newly-added table            
function create_subtable_fixed_ct(e, village_name, table_name, items, max_ct) {
    let table_path = `lc:tables/autogen/village/${village_name}/${table_name}`
    e.create(table_path)
     .createPool(pool => {
        for(let item of items) {
            pool.addEntry(LootEntry.of(item, [1, max_ct]))
        }
     })
    return table_path
}
// creates a subtable where each item may have a different maximum count
//
// e                LootTableEventJS    the event to create tables in
// village_name     string              the name of the village type (e.g. desert)
// table_name       string              the name of the table (e.g. crops)
// items            (RL, int)[]         the registry names of the items to add to the table, paired with their corresponding maximum counts
//
// returns: the path to the newly-added table            
function create_subtable(e, village_name, table_name, items) {
    let table_path = `lc:tables/autogen/village/${village_name}/${table_name}`
    e.create(table_path)
     .createPool(pool => {
        for(let [item, ct] of items) {
            pool.addEntry(LootEntry.of(item, [1, ct]))
        }
     })
    return table_path
}
function create_colorful_subtable(e, village_name, colors) {
    let table_path = `lc:tables/autogen/village/${village_name}/colorful`
    e.create(table_path)
     .createPool(pool => {
        let chalks = [], sacks = [LootEntry.of('supplementaries:sack')], bundles = [LootEntry.of('minecraft:bundle').withWeight(2)]
        for(let color of colors) {
            chalks.add(LootEntry.of(`chalk:${color}_chalk`).withWeight(3))
            sacks.add(LootEntry.of(`supplementaries:sack_${color}`))
            bundles.add(LootEntry.of(`minecraft:${color}_bundle`).withWeight(2))
        }
        pool.addEntry(LootEntry.group(sacks))
        pool.addEntry(LootEntry.group(bundles))
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
// materials        (RL, int)[]         metal nuggets, maybe tool materials (e.g. flint)
// products         (RL, int)[]         local products, like clay or green dye
// trees            ResourceLocation[]  logs and saplings local to the village
// colors           string[]            colors the sacks and bundles should be
// artifacts        (RL, int)[]         artifacts which may spawn in the village
//
// returns:         MutableLootTable    the modified table, which can have more stuff added (e.g. photographs)
function assembleVillageLoot(e, table, name, crops, flora, food, materials, products, trees, colors, artifacts) {
    table.clear()
    table.createPool(pool => {
        pool.rolls(3, 8)
        pool.addEntry(LootEntry.reference(create_subtable_fixed_ct(e, name, 'crops', crops, 5)))
        pool.addEntry(LootEntry.reference(create_subtable_fixed_ct(e, name, 'trees', trees, 3)))
        pool.addEntry(LootEntry.reference(create_subtable(e, name, 'flora', flora)))
        pool.addEntry(LootEntry.reference(create_subtable(e, name, 'food', food)))
        pool.addEntry(LootEntry.reference(create_subtable(e, name, 'materials', materials)))
        pool.addEntry(LootEntry.reference(create_subtable(e, name, 'products', products)))
        pool.addEntry(LootEntry.of('minecraft:emerald', [1, 4]))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(12))
        pool.addEntry(LootEntry.reference(create_colorful_subtable(e, name, colors)).withWeight(5))
        pool.addEntry(LootEntry.reference(create_subtable(e, name, 'artifacts', artifacts)))
    })
    return table
}