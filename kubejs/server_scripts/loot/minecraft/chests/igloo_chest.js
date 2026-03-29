LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/igloo_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 8])
        pool.addEntry(LootEntry.of(`${mc}:apple`, [1, 3]).withWeight(25))
        pool.addEntry(LootEntry.of(`${mc}:coal`, [1, 4]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [3, 9]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:fermented_spider_eye`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:emerald`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:blaze_powder`).withWeight(1))
        pool.addEntry(LootEntry.of(`${bw}:stone_club`).damage([0.8, 1]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:stone_axe`).damage([0.8, 1]).withWeight(4))
        pool.addEntry(LootEntry.of(`${bw}:stone_spear`).damage([0.8, 1]).withWeight(3))
        pool.addEntry(LootEntry.of(`${bw}:stone_quarterstaff`).damage([0.8, 1]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(11))
        pool.addEntry(LootEntry.of(`${ee}:art_filter`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:snowshoes`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:lucky_scarf`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:scarf_of_invisibility`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:antidote_vessel`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:steadfast_spikes`).withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2'))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).addPotion(`${mc}:weakness`))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(99))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})