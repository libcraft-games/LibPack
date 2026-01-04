LootJS.lootTables(e => {
    // Generates 5 tiered resource tables where there is `ratio` more resources per tier, basically.
    // if some or all of the items is null, generates empty tables, but idc because i can hide them
    // in ALI. see https://www.desmos.com/3d/ec4ra7w9ue for math.
    // params:
    //      items   List<string?>   the items of each tier. if a given tier only has null items, it is skipped.
    //                                  must have exactly 3 entries!
    //      ratio   int             the ratio between the number of items in a given tier.
    //                                  for example, if your items are nuggets, ingots, and blocks, and the ratio is 3,
    //                                  the first tier will have 1 nugget (9 * (1/3)^2), the second tier will have 3 nuggets,
    //                                  the third will have 9 nuggets or 1 ingot, &c.
    function registerResourceTables(e, name, items, ratio) {
        for(let i = 1; i <= 5; i++)
            registerTier(e, `lc:tables/autogen/resources/${name}`, i, items, ratio, 2)
    }
    function registerTier(e, path, tier, items, ratio, max) {
        let fullPath = `${path}/tier/${tier}`
        e.create(fullPath).createPool(pool => {
            for(let i = 0; i < 3; i++) {
                let item = items[i]
                let count = ratio ** ((tier - 3) + (2 - 2 * i))
                console.info(`${fullPath}: ${item} ${count} ${count < 1} ${count > (ratio ** 2)}`)
                if(item === null || count < 1 || count > (ratio ** 2))
                    continue
                pool.addEntry(LootEntry.of(item, [count, count * max]).withWeight(count))
            }
        })
    }
    function registerMetalTables(e, namespace, name, esoteric) {
        let items = []
        if(esoteric) {
            items = [`${namespace}:nugget_${name}`, `${namespace}:ingot_${name}`, `${namespace}:storage_${name}`]
        } else {
            items = [`${namespace}:${name}_nugget`, `${namespace}:${name}_ingot`, `${namespace}:${name}_block`]
        }
        registerResourceTables(e, name, items, 3)
    }
    registerMetalTables(e, 'create',                'brass',    false)
    registerMetalTables(e, 'create',                'zinc',     false)
    registerMetalTables(e, 'minecraft',             'gold',     false)
    registerMetalTables(e, 'minecraft',             'iron',     false)
    registerMetalTables(e, 'immersiveengineering',  'aluminum', true)
    registerMetalTables(e, 'immersiveengineering',  'silver',   true)
    registerMetalTables(e, 'immersiveengineering',  'steel',    true)
    registerResourceTables(e, 'amethyst',   ['minecraft:amethyst_shard','minecraft:amethyst_block', 'minecraft:budding_amethyst'],  2)
    registerResourceTables(e, 'copper',     ['create:copper_nugget',    'minecraft:copper_ingot',   'minecraft:copper_block'],      3)
    registerResourceTables(e, 'diamond',    [null,                      'minecraft:diamond',        'minecraft:diamond_block'],     3)
    registerResourceTables(e, 'emerald',    [null,                      'minecraft:emerald',        'minecraft:emerald_block'],     3)
    registerResourceTables(e, 'redstone',   [null,                      'minecraft:redstone',       'minecraft:redstone_block'],    3)
})