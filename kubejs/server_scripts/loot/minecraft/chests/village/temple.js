LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let sb = 'sophisticatedbackpacks'
    let sm = 'scriptor'
    let table = e.getLootTable(`${mc}:chests/village/village_temple`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:rotten_flesh`,         [2, 4]), 6],
        [LootEntry.of(`${mc}:paper`,                [1, 3]), 4],
        [LootEntry.of(`${mc}:glass_bottle`,         [1, 3]), 4],
        [LootEntry.of(`${mc}:lapis_lazuli`,         [1, 3]), 4],
        [LootEntry.of(`${mc}:golden_carrot`,        [1, 2]), 2],
        [LootEntry.of(`${mc}:redstone`,             [1, 3]), 2],
        [LootEntry.of(`${mc}:gold_ingot`,           [1, 2]), 2],
        [LootEntry.of(`${mc}:diamond`), 1],
    ], [
        [LootEntry.of(`${mc}:experience_bottle`,    [2, 4]), 7],
        [LootEntry.of(`${mc}:book`).enchantWithLevels([5, 10]), 7],
        [LootEntry.of(`${mc}:glowstone`), 6],
        [LootEntry.of(`${mc}:rabbit_foot`), 5],
        [LootEntry.of(`${mc}:ender_pearl`), 5],
        [LootEntry.of(`${mc}:golden_apple`), 4],
        [LootEntry.of(`${sm}:tome_tier1`), 4],
        [LootEntry.of(`${ee}:deconverge_filter`), 2],
        [LootEntry.of(`${a}:cross_necklace`), 1],
        [LootEntry.of(`${a}:panic_necklace`), 1],
        [LootEntry.of(`${a}:crystal_heart`), 1],
        [LootEntry.of(`${a}:antidote_vessel`), 1],
    ])
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:inject.chests.village.village_temple/)
    e.removeGlobalModifiers(/exposure_expanded:chests.village_temple/)
})