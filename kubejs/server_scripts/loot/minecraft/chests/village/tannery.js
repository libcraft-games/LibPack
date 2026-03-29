LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let mc = 'minecraft'
    let sb = 'sophisticatedbackpacks'
    let table = e.getLootTable(`${mc}:chests/village/village_tannery`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:leather`, [2, 4]), 4],
        [LootEntry.of(`${mc}:string`, [1, 2]), 2],
        [LootEntry.of(`${mc}:item_frame`), 1]
    ], [
        [LootEntry.of(`${mc}:leather_helmet`).damage([0.65, 1]), 4],
        [LootEntry.of(`${mc}:leather_chestplate`).damage([0.65, 1]), 4],
        [LootEntry.of(`${mc}:leather_leggings`).damage([0.65, 1]), 4],
        [LootEntry.of(`${mc}:leather_boots`).damage([0.65, 1]), 4],
        [LootEntry.of(`${ae}:leather_gloves`).damage([0.65, 1]), 4],
        [LootEntry.of(`${mc}:bundle`), 4],
        [LootEntry.of(`${mc}:saddle`), 3],
        [LootEntry.of(`${mc}:leather_horse_armor`), 1],
        [LootEntry.of(`${sb}:upgrade_base`), 1],
        [LootEntry.of(`${a}:cowboy_hat`), 1],
    ])
})