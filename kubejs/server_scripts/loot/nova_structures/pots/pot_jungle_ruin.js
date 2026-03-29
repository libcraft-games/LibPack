LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:pots/pot_jungle_ruin')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:cocoa_beans`, [2, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${cf}:corn_flour`, [1, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [2, 9]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 9]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`, [1, 5]).withWeight(2).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.of(`${cf}:bar_of_dark_chocolate`, [2, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [3, 10]).withWeight(3))
    })
})