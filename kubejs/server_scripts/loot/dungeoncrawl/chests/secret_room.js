LootJS.lootTables(e => {
    let af = 'artifacts'
    let mc = 'minecraft'
    let dc = 'dungeoncrawl'
    let su = `supplementaries`

    let table = e.getLootTable(`${dc}:chests/secret_room`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/secret_room/music_discs'))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 24]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:name_tag`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 12]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantWithLevels([10, 40]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:map`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:slice_map`, [1, 2]).withWeight(4))
        // TODO: exploration map to other structures
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tier_2'))
    })
    table.createPool(pool => {
        pool.rolls([0, 3])
        pool.addEntry(LootEntry.of(`${mc}:cobweb`, [4, 8]))
    })
})