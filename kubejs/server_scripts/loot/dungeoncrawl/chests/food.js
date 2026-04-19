LootJS.lootTables(e => {
    let af = 'artifacts'
    let mc = 'minecraft'
    let dc = 'dungeoncrawl'
    let su = `supplementaries`
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'
    let xd = 'expandeddelight'

    let table = e.getLootTable(`${dc}:chests/food`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${xd}:sweet_roll`, [2, 3]).withWeight(25),
            LootEntry.of(`${vd}:sweet_potato_cupcake`, [2, 3]).withWeight(24),
            LootEntry.of(`create:bar_of_chocolate`, [1, 3]).withWeight(24),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:apple`, [1, 9]).withWeight(26),
            LootEntry.of(`${mc}:golden_apple`, [1, 2]).withWeight(22),
            LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${fd}:bone_broth`, [1, 3]).withWeight(24),
            LootEntry.of(`${fd}:vegetable_soup`, [1, 2]).withWeight(20),
            LootEntry.of(`${fd}:beef_stew`, [1, 2]).withWeight(20),
            LootEntry.of(`${fd}:chicken_soup`).withWeight(16),
            LootEntry.of(`${fd}:pumpkin_soup`).withWeight(16),
        ]))
    })
    table.createPool(pool => {        
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:cake`))
        pool.addEntry(LootEntry.of(`${vd}:carrot_cake`))
        pool.addEntry(LootEntry.of(`${fd}:shepherds_pie_block`))
    })
})