LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/ruin_loot_master')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        for(let i = 1; i <= 7; i++)
            pool.addEntry(LootEntry.reference(`nova_structures:chests/dungeon_${i}`))
        pool.addEntry(LootEntry.reference('minecraft:chests/simple_dungeon'))
    })
})