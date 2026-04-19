LootJS.lootTables(e => {
    let am = 'amendments'
    let ee = 'exposure_expanded'
    let es = 'enderscape'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let su = 'supplementaries'
    e.create('lc:tables/general/end/treasure/dragon').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:dragon_breath`, [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${su}:dragon_banner_pattern`).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:lumisene_bottle`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${am}:dragon_charge`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:dragon_head`).withWeight(1))
    })
})