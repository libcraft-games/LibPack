LootJS.lootTables(e => {
    // TODO: this needs to be completely redone, as i was designing this assuming this was the table assigned to barrels in the hold;
    //       actually, this loot table is assigned to the chest in the crow's nest, so it should be more rewarding and themed differently.
    let c = 'create'
    let cf = 'createfood'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${su}:loot/galleon/chest`)
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:golden_sword`).withWeight(3).damage([0.6, 0.9]).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:fishing_rod`).withWeight(3).damage([0.3, 0.9]).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).withWeight(2).damage([0.3, 0.9]).enchantRandomly())
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${c}:wheat_flour`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${cf}:salt`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:bread`, [1, 4]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('lc:tables/structure/supplementaries/galleon/supplies').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/supplementaries/galleon/ammo').withWeight(1))
    })
})