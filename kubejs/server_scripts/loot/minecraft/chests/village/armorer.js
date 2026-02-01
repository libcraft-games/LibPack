LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let mc = 'minecraft'
    let se = 'simplest_excavators'
    let table = e.getLootTable(`${mc}:chests/village/village_armorer`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:iron_ingot`), 14],
        [LootEntry.of(`${mc}:coal`, [1, 3]), 7],
        [LootEntry.of(`${mc}:chain`, [1, 3]), 2],
        [LootEntry.of(`${mc}:chainmail_helmet`).damage([0.65, 1]), 1],
        [LootEntry.of(`${mc}:chainmail_chestplate`).damage([0.65, 1]), 1],
        [LootEntry.of(`${mc}:chainmail_leggings`).damage([0.65, 1]), 1],
        [LootEntry.of(`${mc}:chainmail_boots`).damage([0.65, 1]), 1],
        [LootEntry.of(`${ae}:chainmail_gloves`).damage([0.65, 1]), 1],
    ], [
        [LootEntry.of(`${se}:excavator_smithing_template`), 6],
        [LootEntry.of(`${mc}:shield`).damage([0.35, 1]), 6],
        [LootEntry.of(`${mc}:iron_helmet`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_chestplate`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_leggings`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_boots`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${ae}:iron_gloves`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_horse_armor`), 2],
        [LootEntry.of(`${a}:universal_attractor`), 1],
    ])
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:inject.chests.village.village_armorer/)
})