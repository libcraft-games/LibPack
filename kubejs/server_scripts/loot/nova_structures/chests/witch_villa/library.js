LootJS.lootTables(e => {
    let ch = 'chipped'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'
    let table = e.getLootTable('nova_structures:chests/witch_villa/library')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(5).enchantRandomly(`#${mc}:curse`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantRandomly(`${ns}:conductivity_curse`))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(2).enchantWithLevels([5, 20]))
        pool.addEntry(global.enchanted.items.art_of_witchcraft().withWeight(2))
        pool.addEntry(LootEntry.of(`${ch}:alchemy_book`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:ink_sac`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:antique_ink`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.empty().withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2'))
    })
})