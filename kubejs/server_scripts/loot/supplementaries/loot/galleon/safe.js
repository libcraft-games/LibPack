LootJS.lootTables(e => {
    let cd = 'createdeco'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${su}:loot/galleon/safe`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${su}:candy`, [2, 4]).withWeight(60))
        // todo: random stew contents
        pool.addEntry(LootEntry.of(`${mc}:suspicious_stew`).withWeight(25))
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [1, 6]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`, [1, 2]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/structure/supplementaries/galleon/safe/misc').withWeight(14))
        pool.addEntry(LootEntry.reference('lc:tables/structure/supplementaries/galleon/safe/equipment').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tier_2').withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.of(`${cd}:gold_coinstack`, [5, 13]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [2, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [2, 17]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:gold_block`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 3]).withWeight(1))
    })
})