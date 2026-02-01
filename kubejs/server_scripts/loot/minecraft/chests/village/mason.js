LootJS.lootTables(e => {
    let a  = 'artifacts'
    let ae = 'aether'
    let cc = 'chalk'
    let ch = 'chipped'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let sb = 'sophisticatedbackpacks'
    let uf = 'unusual_furniture'
    let table = e.getLootTable(`${mc}:chests/village/village_mason`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:stone`,        [4, 8]), 6],
        [LootEntry.of(`${mc}:stone_bricks`, [4, 8]), 3],
        [LootEntry.of(`${mc}:clay_ball`,    [1, 3]), 3],
        [LootEntry.of(`${mc}:smooth_stone`, [4, 8]), 1],
    ], 
    [
        [LootEntry.of(`${mc}:terracotta`,           [4, 8]),            5],
        [LootEntry.of(`${mc}:brick`,                [3, 6]),            4],
        [LootEntry.of(`${ch}:chisel`),                                  3],
        [LootEntry.of(`${cc}:white_chalk`)          .damage([0.33, 1]), 2],
        [LootEntry.of(`${cc}:light_gray_chalk`)     .damage([0.33, 1]), 2],
        [LootEntry.of(`${cc}:gray_chalk`)           .damage([0.33, 1]), 2],
        [LootEntry.of(`${uf}:stone_pot`,            [2, 4]),            2],
        [LootEntry.of(`${uf}:vintage_flower_pot`,   [2, 4]),            1],
    ])
})