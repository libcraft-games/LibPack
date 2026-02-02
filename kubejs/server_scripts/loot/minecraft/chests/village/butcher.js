LootJS.lootTables(e => {
    let a = 'artifacts'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/village/village_butcher`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:wheat`,        [1, 3]), 2],
        [LootEntry.of(`${mc}:beef`,         [1, 2]), 2],
        [LootEntry.of(`${mc}:porkchop`,     [1, 2]), 2],
        [LootEntry.of(`${mc}:mutton`,       [1, 2]), 2],
        [LootEntry.of(`${mc}:coal`,         [1, 3]), 2],
        [LootEntry.of(`${fd}:minced_beef`,  [2, 4]), 1],
        [LootEntry.of(`${fd}:bacon`,        [2, 4]), 1],
        [LootEntry.of(`${fd}:mutton_chops`, [2, 4]), 1],
    ], [
        [LootEntry.of(`${fd}:flint_knife`).damage([0.45, 0.85]), 45],
        [LootEntry.of(`${fd}:iron_knife`).damage([0.45, 0.85]), 35],
        [LootEntry.of(`${fd}:ham`), 25],
        [LootEntry.of(`${fd}:skillet`).damage([0.45, 0.85]), 15],
        [LootEntry.of(`${fd}:honey_glazed_ham_block`), 5],
        [LootEntry.of(`${fd}:shepherds_pie_block`), 5],
        [LootEntry.of(`${a}:everlasting_beef`), 1],
    ])
})