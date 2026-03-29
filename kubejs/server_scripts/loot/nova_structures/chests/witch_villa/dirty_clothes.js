LootJS.lootTables(e => {
    let a = 'artifacts'
    let ew = 'enchanted'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'

    function witchClothes(item, name, color) {
        return LootEntry.of(`${mc}:leather_${item}`)
                        .jsonFunction({
                            function: `${mc}:set_components`,
                            components: { dyed_color: { rgb: HexToDec(color) } }
                        })
                        .enchantRandomly(`${ns}:conductivity_curse`)
                        .enchantWithLevels([5, 15])
                        .damage([0.15, 0.85])
                        .setName(Component.of(`Witch ${name}`).italic(false))
    }

    let table = e.getLootTable('nova_structures:chests/witch_villa/dirty_clothes')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:name_tag`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:tripwire_hook`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:wirecoil_structure_rope`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:connector_structural`, 2).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(witchClothes('chestplate', 'Coat',    '#382246').withWeight(4))
        pool.addEntry(witchClothes('chestplate', 'Robe',    '#2C3320').withWeight(4))
        pool.addEntry(witchClothes('leggings',   'Pants',   '#413027').withWeight(3))
        pool.addEntry(witchClothes('boots',      'Boots',   '#5A5E60').withWeight(3))
        pool.addEntry(LootEntry.of(`${ew}:earmuffs`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(15))
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly(`${mc}:mending`).withWeight(5))
        pool.addEntry(LootEntry.of(`${a}:superstitious_hat`))
        pool.addEntry(LootEntry.of(`${a}:lucky_scarf`))
        pool.addEntry(LootEntry.of(`${a}:rooted_boots`))
        pool.addEntry(LootEntry.of(`${a}:anglers_hat`))
        pool.addEntry(LootEntry.of(`${a}:aqua_dashers`))
    })
})