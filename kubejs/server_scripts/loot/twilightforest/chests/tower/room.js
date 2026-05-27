LootJS.lootTables(e => {
    let lc = 'libcraft'
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${tf}:chests/tower_room`)
    table.clear()
    table.createPool(pool => {
        pool.rolls(4)
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:candle`, [2, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:amethyst_shard`, [2, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [3, 7]).withWeight(3))
        pool.addEntry(LootEntry.of(`${tf}:wrought_iron_bar`, [1, 3]).withWeight(1))
        // todo: suspicious stew?
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.of(`${mc}:obsidian`, [1, 4]).withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(9))
        pool.addEntry(LootEntry.of(`${tf}:transformation_powder`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:ender_pearl`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:wither_rose`).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(2).addPotion(`${mc}:regeneration`))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
        pool.addEntry(LootEntry.of(`${tf}:magic_map`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(1).enchantWithLevels(25))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:strength`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${mc}:harming`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${lc}:wither`))
        pool.addEntry(LootEntry.of(`${tf}:brittle_potion_flask`, [1, 3]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(7))
        pool.addEntry(LootEntry.of(`${tf}:exanimate_essence`, [2, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${tf}:liveroot`, [3, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${tf}:crown_splinter`).withWeight(5))
        pool.addEntry(LootEntry.of(`${tf}:charm_of_life_1`).withWeight(4))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['regal', 'taken'])).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
        pool.addEntry(LootEntry.of(`${tf}:peacock_feather_fan`).withWeight(1))
        pool.addEntry(LootEntry.of(`${tf}:moonworm_queen`).withWeight(1))
    })
})