LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sh = 'simplest_hammers'
    let table = e.getLootTable(`${mc}:chests/village/village_weaponsmith`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:iron_ingot`), 26],
        [LootEntry.of(`${mc}:coal`, [1, 3]), 13],
        [LootEntry.of(`${bw}:iron_dagger`).damage([0.65, 1]), 9],
        [LootEntry.of(`${mc}:iron_sword`).damage([0.65, 1]), 3],
        [LootEntry.of(`${bw}:iron_club`).damage([0.65, 1]), 1],
    ], [
        [LootEntry.of(`${sh}:hammer_smithing_template`), 8],
        [LootEntry.of(`${bw}:iron_quarterstaff`).damage([0.35, 0.85]), 6],
        [LootEntry.of(`${bw}:iron_spear`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${bw}:iron_glaive`).damage([0.35, 0.85]), 3],
        [LootEntry.of(`${bw}:iron_hammer`).damage([0.35, 0.85]), 2],
        [LootEntry.of(`${a}:superstitious_hat`), 1],
    ])
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:inject.chests.village.village_weaponsmith/)
})