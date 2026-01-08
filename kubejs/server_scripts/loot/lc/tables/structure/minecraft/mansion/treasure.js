LootJS.lootTables(e => {    
    let bw = 'basicweapons'
    let ee = 'exposure_expanded'
    let ie = global.ie.namespace
    let ip = 'immersive_paintings'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/mansion/treasure')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:tnt`, [3, 9]).withWeight(12))
        pool.addEntry(LootEntry.of(`${ie}:gunpowder_barrel`, [2, 6]).withWeight(11))
        pool.addEntry(LootEntry.of(`${mc}:vex_armor_trim_smithing_template`).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:painting`, [2, 7]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ip}:graffiti`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ee}:desaturate_filter`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(4).enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(3).enchantWithLevels([30, 40]))
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${ie}:hoe_steel`)         .withWeight(3).enchantRandomly().enchantRandomly(),
            LootEntry.of(`${ie}:axe_steel`)         .withWeight(3).enchantRandomly().enchantRandomly(),
            LootEntry.of(`${bw}:steel_glaive`)      .withWeight(3).enchantRandomly().enchantRandomly(),
            LootEntry.of(`${ie}:armor_steel_chestplate`)  .withWeight(2).enchantRandomly().enchantRandomly(),
            LootEntry.of(`${ie}:armor_steel_leggings`)    .withWeight(2).enchantRandomly().enchantRandomly(),
            LootEntry.of(`${ie}:armor_steel_boots`)       .withWeight(2).enchantRandomly().enchantRandomly(),
        ))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).withWeight(3).enchantRandomly().enchantRandomly())
        pool.addEntry(LootEntry.of(`${mc}:arrow`, [2, 7]).withWeight(3).addPotion(`${mc}:strong_harming`))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(2).jsonFunction({
            function: `${su}:random_arrows`
        }))
        // todo: Scriptor artifacts
    })
})