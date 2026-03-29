LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let se = 'simplest_excavators'
    let sh = 'simplest_hammers'
    let table = e.getLootTable(`${mc}:chests/village/village_toolsmith`)

    AssembleVillageProfessionLoot(table, [
        [LootEntry.of(`${mc}:iron_ingot`), 4],
        [LootEntry.of(`${mc}:coal`, [1, 3]), 1],
        [LootEntry.of(`${mc}:stick`, [2, 4]), 1],
        [LootEntry.of(`${sh}:hammer_smithing_template`), 1],
        [LootEntry.of(`${se}:excavator_smithing_template`), 1],
    ], [
        [LootEntry.of(`${mc}:obsidian`, [3, 7]), 7],
        [LootEntry.of(`${mc}:iron_pickaxe`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_shovel`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_axe`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${mc}:iron_hoe`).damage([0.35, 0.85]), 4],
        [LootEntry.of(`${a}:pickaxe_heater`), 1],
    ])
})