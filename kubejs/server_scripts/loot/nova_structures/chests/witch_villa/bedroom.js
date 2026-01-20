LootJS.lootTables(e => {
    let a  = 'artifacts'
    let cf = 'createfood'
    let ch = 'chipped'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let uf = 'unusual_furniture'
    let table = e.getLootTable('nova_structures:chests/witch_villa/bedroom')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${uf}:cat_plush`).withWeight(55))
        pool.addEntry(LootEntry.empty().withWeight(30))
        pool.addEntry(LootEntry.of(`${a}:kitty_slippers`).withWeight(4))
        pool.addEntry(LootEntry.of(`${a}:bunny_hoppers`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:charm_of_shrinking`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:vampiric_glove`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:novelty_drinking_hat`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:candle`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:rope`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:lead`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_cluster`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:writable_book`).withWeight(4))
        pool.addEntry(global.enchanted.items.art_of_witchcraft().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(2).enchantRandomly([
            `${mc}:respiration`,
            `${mc}:silk_touch`,
            `${mc}:binding_curse`
        ]))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:long_strength`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:long_weakness`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(2).addPotion(`${mc}:long_water_breathing`))
    })
})