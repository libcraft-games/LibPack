LootJS.lootTables(e => {
    let path = 'minecraft:chests/simple_dungeon'
    let table = e.getLootTable(path)
    let mc = 'minecraft', ie = 'immersiveengineering', su = 'supplementaries'
    let ex = 'exposure', ee = 'exposure_expanded'
    let cd = 'culturaldelights'
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:saddle`).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:name_tag`).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly().withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_13`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_cat`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_blocks`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_chirp`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_strad`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:music_disc_11`).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:quiver`).withWeight(7).jsonFunction({
            function: `${su}:random_arrows`
        }))
        pool.addEntry(LootEntry.reference(`lc:tables/structure/minecraft/simple_dungeon/exposure`).withWeight(6))
        pool.addEntry(LootEntry.reference(`lc:tables/general/scriptor/tier_1`).withWeight(5))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.of(`${mc}:bread`,           [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:wheat`,           [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:redstone`,        [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:coal`,            [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`,      [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:ingot_nickel`,    [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`,      [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:cocoa_beans`,     [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${cd}:eggplant_seeds`,  [1, 4]).withWeight(1))
        pool.addEntry(LootEntry.of(`${cd}:avocado_pit`,     [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.of(`${mc}:bone`,            [1, 8]))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`,       [1, 8]))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`,    [1, 8]))
        pool.addEntry(LootEntry.of(`${mc}:string`,          [1, 8]))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*simple_dungeon.*/)
    e.removeGlobalModifiers(/chalk:.*simple_dungeon.*/)
    e.removeGlobalModifiers(/exposure:.*simple_dungeon.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*simple_dungeon.*/)
})