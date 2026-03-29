LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/ravager_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        // todo: i'd like this potion to apply like Strength IV and Poison II or smth
        pool.addEntry(LootEntry.of(`${mc}:potion`).addPotion(`${mc}:strong_strength`))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.sequence([
            LootEntry.of(`${mc}:warped_fungus_on_a_stick`).damage([0.1, 1]),
            LootEntry.of(`${mc}:fishing_rod`).damage([0, 0.1])
        ]))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.of(`${mc}:beef`, [6, 10]))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:leather`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:saddle`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ii}:platinum_chunk`, [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(19))
        pool.addEntry(LootEntry.of(`artifacts:cowboy_hat`))
    })
})