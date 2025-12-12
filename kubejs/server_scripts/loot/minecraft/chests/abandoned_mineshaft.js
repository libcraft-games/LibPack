LootJS.lootTables(e => {
    let path = 'minecraft:chests/abandoned_mineshaft'
    let table = e.getLootTable(path)
    let mc = 'minecraft', ie = 'immersiveengineering', su = 'supplementaries'
    let ex = 'exposure', ee = 'exposure_expanded'
    table.print()
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/lighting').withWeight(15))
        pool.addEntry(LootEntry.reference('lc:tables/general/navigation/chalk').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/explosives').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/foods').withWeight(12))
        // general materials
            // sticks
            // planks
            // iron ingots
            // fence
            // leather
            // tough cloth
            // rope
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/rails').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/minecarts').withWeight(4))
        // junk
            // spider eye
            // string
            // cobwebs
            // based on underground biomes:
                // pointed dripstone
                // clay
                // glowworm silk
                // spider egg, hanging cobweb, webbing
            // slimeballs
            // bricks
            // ash bricks
            // bones
        // equipment
            // storage
                // sack (all colors)
                // bundle (all colors)
                // storage crate
        pool.rolls([2, 5])
    })
    table.createPool(pool => {
        pool.rolls([1, 3]).addEntry(LootEntry.reference('lc:tables/general/mining/ores'))
    })
    // treasure
    table.createPool(pool => {
        pool.rolls(1).bonusRolls(1)
        pool.addEntry(LootEntry.empty().withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/tools').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/mining_info').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/music_discs').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/enchanted_books').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/artifacts').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/structure/mineshaft/exposure').withWeight(1))
        // potions
            // haste
            // night vision
            // miner's brew
        // misc
            // climbing axe
            // golden apple
            // enchanted golden apple
            // name tag
            // drill heads
            // excavator, hammer templates
    })
    table.print()
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*abandoned_mineshaft.*/)
    e.removeGlobalModifiers(/chalk:.*abandoned_mineshaft.*/)
    e.removeGlobalModifiers(/exposure:.*abandoned_mineshaft.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*abandoned_mineshaft.*/)
})