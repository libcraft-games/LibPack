LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    let cd = 'culturaldelights'
    let cf = 'createfood'
    let mc = 'minecraft'
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'
    let su = 'supplementaries'
    e.create('lc:tables/structure/mineshaft/foods').createPool(pool => {
        // root vegetables
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${mc}:carrot`, [2, 5]).withWeight(7),
            LootEntry.of(`${fd}:onion`, [3, 7]).withWeight(10),
            LootEntry.of(`${vd}:turnip`, [3, 5]).withWeight(6),
            LootEntry.of(`${mc}:beetroot`, [4, 6]).withWeight(6),
            LootEntry.of(`${mc}:golden_carrot`, [1, 4]).withWeight(1)
        ))
        // baked stuff idk
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${mc}:bread`, [3, 7]).withWeight(20),
            LootEntry.of(`${vd}:cauliflower_bread`, [2, 5]).withWeight(8),
            LootEntry.of(`${mc}:cookie`, [8, 16]).withWeight(9),
            LootEntry.of(`${su}:pancake`, [3, 8]).withWeight(6),
            LootEntry.of(`${cf}:breakfast_bar`, [1, 3]).withWeight(2),
            LootEntry.of(`${cf}:bar_of_dark_chocolate`, [2, 4]).withWeight(3),
        ))
        // underground foods
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${mc}:brown_mushroom`, [5, 7]).withWeight(6),
            LootEntry.of(`${fd}:brown_mushroom_colony`, 1).withWeight(1),
            LootEntry.of(`${mc}:red_mushroom`, [3, 7]).withWeight(5),
            LootEntry.of(`${fd}:red_mushroom_colony`, [0, 1]).withWeight(1),
            // todo: biome check
            LootEntry.of(`${bop}:glowshroom`, [2, 4]).withWeight(3),
            LootEntry.of(`${mc}:glow_berries`, [3, 5]).withWeight(6)
        ))
        // meats which preserve well (and the consequences of them not preserving)
        pool.addEntry(LootEntry.group(
            LootEntry.of(`${fd}:cooked_bacon`, [5, 8]).withWeight(10),
            LootEntry.of(`${cf}:rabbit_jerky`, [7, 12]).withWeight(8),
            LootEntry.of(`${mc}:rotten_flesh`, [5, 16]).withWeight(20),
            LootEntry.of(`${cf}:sausages`, [3, 6]).withWeight(5)
        ))
    })
})