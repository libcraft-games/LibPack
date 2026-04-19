LootJS.lootTables(e => {
    let ae = 'aether'
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let sm = 'scriptor'
    let su = 'supplementaries'
    let table = e.getLootTable('minecraft:chests/stronghold/library_bookshelf')

    function patchouli(bookId) {
        return LootEntry.of(`patchouli:guide_book`).jsonFunction({
            function: 'minecraft:set_components',
            components: {
                'patchouli:book': bookId
            }
        })
    }

    table.clear()
    table.createPool(pool => {
        pool.rolls([7, 12])
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(160))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${mc}:book`).withWeight(160).enchantWithLevels([5, 10]),
            LootEntry.of(`${mc}:book`).withWeight(80).enchantWithLevels([10, 20]),
            LootEntry.of(`${mc}:book`).withWeight(20).enchantWithLevels([20, 30]),
            LootEntry.of(`${mc}:book`).withWeight(5).enchantWithLevels([30, 40]),
        ]))
        pool.addEntry(LootEntry.group([
            LootEntry.of(`${sm}:tome_tier2`).withWeight(40),
            LootEntry.of(`${sm}:tome_tier3`).withWeight(10),
            LootEntry.of(`${sm}:tome_tier4`).withWeight(1),
        ]))      
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(300))
        pool.addEntry(patchouli('scriptor:scriptor_guide').withWeight(5))
        pool.addEntry(global.enchanted.items.art_of_witchcraft().withWeight(5))
        pool.addEntry(LootEntry.of(`chipped:alchemy_book`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:manual`).withWeight(3))
        pool.addEntry(LootEntry.of(`${ae}:book_of_lore`).withWeight(2))
        pool.addEntry(patchouli('twilightdelight:twilight_guide').withWeight(2))
        pool.addEntry(patchouli('buildinggadgets2:buildinggadgets2book').withWeight(1))
    })
})