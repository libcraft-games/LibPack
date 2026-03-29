LootJS.lootTables(e => {
    let ca = 'createaddition'
    let cc = 'crittersandcompanions'
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:chests/illager_hideout_trash')
    table.clear()

    table.createPool(pool => {
        pool.rolls([3, 7])
        pool.addEntry(LootEntry.of(`${mc}:stick`, [1, 5]).withWeight(14))
        pool.addEntry(LootEntry.of(`${mc}:bowl`, [1, 2]).withWeight(13))
        pool.addEntry(LootEntry.of(`${mc}:dirt`, [3, 11]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`, [1, 4]).withWeight(10))
        pool.addEntry(LootEntry.of(`${fd}:rotten_tomato`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:poisonous_potato`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${su}:ash`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${fd}:tree_bark`, [1, 3]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:beetroot_seeds`, [1, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:brown_dye`, [1, 2]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:flint`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${fd}:organic_compost`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:bone_meal`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:brown_mushroom`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:red_mushroom`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${fd}:straw`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:spider_eye`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ca}:biomass`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${fd}:brown_mushroom_colony`).withWeight(2))
        pool.addEntry(LootEntry.of(`${fd}:red_mushroom_colony`).withWeight(2))
        pool.addEntry(LootEntry.of(`${cc}:clam`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${fd}:rich_soil`, [1, 3]).withWeight(1))
    })
})