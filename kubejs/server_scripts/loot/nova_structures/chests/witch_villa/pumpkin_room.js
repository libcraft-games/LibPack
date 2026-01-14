LootJS.lootTables(e => {
    let cf = 'createfood'
    let ch = 'chipped'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/witch_villa/pumpkin_room')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:pumpkin`).withWeight(5),
            LootEntry.of(`${fd}:pumpkin_slice`, [1, 4]).withWeight(4),
            LootEntry.of(`${mc}:pumpkin_seeds`, [1, 5]).withWeight(4),
            LootEntry.of(`${cf}:pumpkin_puree_bucket`).withWeight(2),
            LootEntry.of(`${fd}:stuffed_pumpkin_block`).withWeight(1)
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:traditional_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:horrified_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:anguished_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:suspicious_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:squished_cute_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:owo_carved_pumpkin`).withWeight(1),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:traditional_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:horrified_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:anguished_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:suspicious_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:squished_cute_carved_pumpkin`).withWeight(1),
            LootEntry.of(`${ch}:owo_carved_pumpkin`).withWeight(1),
        ]))
    })
})