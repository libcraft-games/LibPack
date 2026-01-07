LootJS.lootTables(e => {
    let af = 'artifacts'
    let mc = 'minecraft'
    let dc = 'dungeoncrawl'
    let su = `supplementaries`
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'

    let table = e.getLootTable(`${dc}:chests/food`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        // weights are equal to 26 - sum of potion effects in 30-second increments
        // counts are based vaguely on saturation and food
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${cf}:cream_pie_graham_cracker_slice`, [4, 6]).withWeight(25),
            LootEntry.of(`${cf}:glow_berry_pie_slice`, [4, 8]).withWeight(24),
            LootEntry.of(`${cf}:meat_pie_slice`, [3, 4]).withWeight(24),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${cf}:apple_cream_sweet_roll`, [4, 5]).withWeight(25),
            LootEntry.of(`${cf}:cream_sweet_roll_glow_berry`, [2, 3]).withWeight(25),
            LootEntry.of(`${cf}:cream_sweet_roll_sweet_berry`, [2, 4]).withWeight(25),
            LootEntry.of(`${cf}:berry_cream_chocolate_sweet_roll_sweet_berry`, [2, 4]).withWeight(22),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:apple`, [4, 9]).withWeight(26),
            LootEntry.of(`${mc}:golden_apple`, [1, 2]).withWeight(22),
            LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${fd}:bone_broth`, [1, 3]).withWeight(24),
            LootEntry.of(`${fd}:vegetable_soup`, [1, 2]).withWeight(20),
            LootEntry.of(`${fd}:beef_stew`, [1, 2]).withWeight(20),
            LootEntry.of(`${fd}:chicken_soup`).withWeight(16),
            LootEntry.of(`${fd}:pumpkin_soup`).withWeight(16),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${cf}:berry_milkshake_bottle`, [1, 5]).withWeight(24),
            LootEntry.of(`${cf}:melon_milkshake_bottle`, [1, 4]).withWeight(24),
            LootEntry.of(`${cf}:caramel_chip_milkshake_bottle`, [1, 3]).withWeight(24),
            LootEntry.of(`${cf}:fruit_smoothie_bottle`, [1, 2]).withWeight(8),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${cf}:apple_cream_mini_waffle`, [1, 6]).withWeight(24),
            LootEntry.of(`${cf}:berry_cream_mini_waffle_sweet_berry`, [1, 5]).withWeight(23),
            LootEntry.of(`${cf}:cream_mini_waffle_sweet_berry`, [1, 5]).withWeight(23),
        ]))
    })
    table.createPool(pool => {        
        pool.rolls([1, 2])
        LootEntry.of(`${mc}:cake`)
        LootEntry.of(`${vd}:carrot_cake`)
        LootEntry.of(`${cf}:chocolate_cream_cake_dark_chocolate`)
        LootEntry.of(`${cf}:cream_pie_graham_cracker`)
    })
})