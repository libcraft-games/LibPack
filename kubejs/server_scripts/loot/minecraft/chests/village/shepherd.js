LootJS.lootTables(e => {
    let ch = 'chipped'
    let co = 'comforts'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/village/village_shepherd`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:white_wool`, [2, 6]), 2],
        [LootEntry.of(`${mc}:wheat`, [1, 3]), 2],
        [LootEntry.of(`${mc}:black_wool`, [1, 3]), 1],
        [LootEntry.of(`${mc}:gray_wool`, [1, 3]), 1],
        [LootEntry.of(`${mc}:light_gray_wool`, [1, 3]), 1],
        [LootEntry.of(`${mc}:brown_wool`, [1, 3]), 1],
    ], [
        [LootEntry.of(`${mc}:shears`).damage([0.35, 1]),    9],
        [LootEntry.of(`${ch}:needles`),                     3],
        [LootEntry.of(`${co}:sleeping_bag_white`),          3],
        [LootEntry.of(`${co}:sleeping_bag_brown`),          3],
        [LootEntry.of(`${mc}:painting`),                    2],
        [LootEntry.of(`${mc}:flower_banner_pattern`),       1],
    ])
})