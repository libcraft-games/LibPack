LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/creeping_crypt/vault_creeping')
    table.clear()
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:tnt`, 7).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, 4).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:redstone_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:emerald_block`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, 21).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:moss_block`, 14).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:bone_block`, 7).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`, 4).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantRandomly([`${mc}:blast_protection`, `${mc}:knockback`]))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e,
            ['ikelos', 'massfusion',
            'dragonsbreath',
            'locus']
        )).withWeight(3))
        pool.addEntry(LootEntry.of(`${bw}:steel_hammer`).withWeight(3).enchantRandomly(`${mc}:knockback`).enchantWithLevels(20))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_13`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantRandomly([`${ns}:photosynthesis`, `${mc}:punch`]))
    })
})