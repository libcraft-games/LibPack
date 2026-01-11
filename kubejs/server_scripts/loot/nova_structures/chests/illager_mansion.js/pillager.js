LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/pillager_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(17))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(16))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/pillager').withWeight(15))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:crossbow`).withWeight(5).enchantWithLevels([10, 20]).damage([0.85, 1]),
            LootEntry.of(`${mc}:tipped_arrow`, [1, 10]).withWeight(5).addPotion(`${mc}:strong_harming`),
            LootEntry.of(`${mc}:emerald`, [6, 10]).withWeight(3)
        ]))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
    })
})