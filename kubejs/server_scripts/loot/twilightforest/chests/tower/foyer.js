LootJS.lootTables(e => {
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${tf}:chests/tower_foyer`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 7]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:skeleton_skull`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:poppy`).withWeight(5))
        pool.addEntry(LootEntry.of(`${tf}:torchberries`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${tf}:raven_feather`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`).withWeight(3))
        // todo: suspicious stew (wither, regeneration, strength, instant damage)
        pool.addEntry(LootEntry.of(`${mc}:stick`, [3, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:charcoal`, [1, 5]).withWeight(1))
        pool.addEntry(LootEntry.of(`${tf}:charm_of_keeping_1`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
    })
})