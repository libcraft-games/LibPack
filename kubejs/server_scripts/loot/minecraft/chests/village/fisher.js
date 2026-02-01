LootJS.lootTables(e => {
    let a  = 'artifacts'
    let ae = 'aether'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let sb = 'sophisticatedbackpacks'
    let table = e.getLootTable(`${mc}:chests/village/village_fisher`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:cod`,      [2, 4]), 4],
        [LootEntry.of(`${mc}:string`,   [1, 3]), 3],
        [LootEntry.of(`${mc}:stick`,    [1, 3]), 3],
        [LootEntry.of(`${mc}:bone_meal`,[1, 2]), 2],
        [LootEntry.of(`${mc}:salmon`,   [1, 3]), 2],
        [LootEntry.of(`${mc}:ink_sac`,  [2, 3]), 1],
    ], 
    [
        [LootEntry.of(`${mc}:fishing_rod`).damage([0.35, 1]), 15],
        [LootEntry.of(`${mc}:bucket`), 12],
        [LootEntry.of(`${mc}:water_bucket`), 10],
        [LootEntry.of(`${fd}:iron_knife`).damage([0.35, 1]), 9],
        [LootEntry.of(`${a}:anglers_hat`), 1],
    ])
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:inject.chests.village.village_fisher/)
})