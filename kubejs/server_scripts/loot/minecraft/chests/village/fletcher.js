LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let mc = 'minecraft'
    let sb = 'sophisticatedbackpacks'
    let su = 'supplementaries'
    let table = e.getLootTable(`${mc}:chests/village/village_fletcher`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:arrow`,    [3, 5]), 3],
        [LootEntry.of(`${mc}:flint`,    [1, 3]), 2],
        [LootEntry.of(`${mc}:stick`,    [1, 3]), 2],
        [LootEntry.of(`${mc}:feather`,  [1, 3]), 2],
        [LootEntry.of(`${mc}:egg`,      [1, 2]), 1],
    ], 
    [
        [LootEntry.of(`${mc}:bow`).damage([0.35, 1]), 4],
        [LootEntry.of(`${mc}:crossbow`).damage([0.35, 1]), 3],
        [LootEntry.of(`${su}:quiver`), 1],
    ])
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:inject.chests.village.village_fletcher/)
})