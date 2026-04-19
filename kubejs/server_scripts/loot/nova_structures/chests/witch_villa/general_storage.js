LootJS.lootTables(e => {
    let a = 'artifacts'
    let bw = 'basicweapons'
    let cd = 'culturaldelights'
    let ch = 'chipped'
    let ew = 'enchanted'
    let fd = 'farmersdelight'
    let lc = 'libcraft'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'
    let uf = 'unusual_furniture'
    let ug = 'undergarden'
    let vd = 'veggiesdelight'

    let table = e.getLootTable('nova_structures:chests/witch_villa/general_storage')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:cobblestone`, [4, 8]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:oak_log`, [1, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:spruce_log`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:cobbled_deepslate`, [3, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ew}:wicker_bundle`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:purple_wool`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:orange_wool`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:light_blue_wool`, [1, 3]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:stick`, [3, 13]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:charcoal`, [2, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:string`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:honeycomb`, [1, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [3, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:copper_ingot`, [2, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 3]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`)        .withWeight(16).damage([0.65, 1]))
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`)     .withWeight(13).damage([0.65, 1]))
        pool.addEntry(LootEntry.of(`${mc}:bucket`, [1, 2])  .withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`)        .withWeight(10).damage([0.35, 0.85]).enchantWithLevels([10, 20]))
        pool.addEntry(LootEntry.of(`${bw}:iron_dagger`)     .withWeight( 8).damage([0.35, 0.85]).enchantWithLevels([10, 20]))
        pool.addEntry(LootEntry.of(`${ew}:ritual_chalk`)    .withWeight( 6).damage([0.5, 1]))
        pool.addEntry(LootEntry.of(`${ew}:arthana`)         .withWeight( 4).damage([0.65, 1]))
        pool.addEntry(LootEntry.of(`${ew}:golden_chalk`)    .withWeight( 2))
        pool.addEntry(LootEntry.of(`${a}:umbrella`)         .withWeight( 1))
    })
    table.createPool(pool => {
        pool.rolls([3, 7])
        let base = '', splash = 'splash_'
        let potions = [
            [base,      `${mc}:water`,          5],
            [base,      `${mc}:mundane`,        5],
            [base,      `${mc}:thick`,          5],
            [base,      `${mc}:awkward`,        5],
            [splash,    `${mc}:awkward`,        5],
            [base,      `${mc}:healing`,        5],
            [base,      `${mc}:luck`,           5],
            [splash,    `${mc}:harming`,        5],
            [splash,    `${lc}:shatterspleen`,  5],
            [splash,    `${lc}:unluck`,         5],
            [base,      `${mc}:night_vision`,   4],
            [base,      `${mc}:swiftness`,      4],
            [base,      `${mc}:leaping`,        4],
            [base,      `${lc}:resistance`,     4],
            [splash,    `${lc}:nausea`,         4],
            [splash,    `${lc}:confusion`,      4],
            [splash,    `${lc}:levitation`,     4],
            [splash,    `${mc}:weakness`,       4],
            [splash,    `${ug}:glowing`,        4],
            [base,      `${lc}:perception`,     3],
            [base,      `${mc}:slow_falling`,   3],
            [base,      `${mc}:regeneration`,   3],
            [splash,    `${lc}:blindness`,      3],
            [splash,    `${mc}:poison`,         3],
            [splash,    `${lc}:mining_fatigue`, 3],
            [splash,    `${mc}:slowness`,       3],
            [base,      `${mc}:fire_resistance`,2],
            [base,      `${lc}:water_walking`,  2],
            [base,      `${lc}:retaliation`,    2],
            [splash,    `${lc}:creative_shock`, 2],
            [splash,    `${lc}:wither`,         2],
            [splash,    `${lc}:bleeding`,       2],
            [splash,    `${mc}:invisibility`,   1],
            [splash,    `${mc}:weaving`,        1],
            [splash,    `${lc}:heartbreak`,     1],
        ]
        for(let [type, id, weight] of potions) {
            pool.addEntry(LootEntry.of(`${mc}:${type}potion`).addPotion(id).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(9))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e,[
            'ancient',
            'hollow', 'radiant',
            'bipride', 'lesbianpride', 'transpride', 'rosequartz'
        ])))
    })
    table.createPool(pool => {
        pool.rolls([1, 6])
        pool.addEntry(LootEntry.of(`${mc}:cobweb`))
    })
})