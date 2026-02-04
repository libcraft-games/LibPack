LootJS.lootTables(e => {
    let a  = 'artifacts'
    let mc = 'minecraft'
    let ps = 'permanentsponges'
    let sa = 'sweety_archaeology'
    let table = e.create('lc:tables/structure/nova_structures/trident_trial_monument/treasure_rare')
    table.createPool(pool => {
        pool.addEntry(EnchantWithLevelsAndTag(LootEntry.of(`${mc}:book`), 30, '#lc:structure_group/ocean').withWeight(5))
        pool.addEntry(LootEntry.of(`${ps}:aqueous_sponge_on_a_stick`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:snorkel`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:flippers`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:trident`).withWeight(1))
        pool.addEntry(LootEntry.of(`${sa}:golden_cube`).withWeight(1))
    })
})