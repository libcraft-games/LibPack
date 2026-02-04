LootJS.lootTables(e => {
    let cf = 'createfood'
    let ed = 'endersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:spawners/end_castle/spawner_phantom')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${cf}:cream_chocolate_sweet_roll_chorus_fruit`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:phantom_membrane`, 2).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:slow_falling`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${lc}:retaliation`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).withWeight(1).addPotion(`${lc}:venom`))
    })
})