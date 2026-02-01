LootJS.lootTables(e => {
    let a = 'artifacts'
    let cc = 'chalk'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.getLootTable(`${mc}:chests/village/village_cartographer`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:paper`,            [3, 6]),        8],
        [LootEntry.of(`${mc}:map`,              [1, 3]),        4],
        [LootEntry.of(`${sa}:archaeology_map`,  [1, 2]),        1],
    ], [
        [LootEntry.of(`${mc}:compass`),                        17],
        [LootEntry.of(`${su}:altimeter`),                       6],
        [LootEntry.of(`${cc}:white_chalk`).damage([0.33, 1]),   3],
        [LootEntry.of(`${cc}:blue_chalk`) .damage([0.33, 1]),   3],
        [LootEntry.of(`${cc}:green_chalk`).damage([0.33, 1]),   3],
        [LootEntry.of(`${su}:globe`),                           2],
        [LootEntry.of(`${su}:slice_map`),                       1],
    ])
    // TODO: explorer maps
    //       - other villages (common)
    //       - taverns
    //       - dungeon-type structures (rare)
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/chalk:chests.village_chalks/)
    e.removeGlobalModifiers(/sweety_archaeology:cartographer_map/)
})