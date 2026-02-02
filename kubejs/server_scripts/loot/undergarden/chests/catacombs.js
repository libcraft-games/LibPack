LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let ud = 'undergardendelight'
    let ug = 'undergarden'

    function enchantAndDamage_common(item) {
        return LootEntry.of(item)
                        .withWeight(3)
                        .damage([0.6, 0.9])
                        .enchantWithLevels([15, 20])
    }
    function enchantAndDamage_rare(item) {
        return LootEntry.of(item)
                        .withWeight(1)
                        .damage([0.2, 0.5])
                        .enchantRandomly(`#${mc}:treasure`)
                        .enchantWithLevels([25, 30])
    }

    let table = e.getLootTable(`${ug}:chests/catacombs`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        let items = [
            [`${ug}:depthrock_pebble`, 8, 7],
            [`${ug}:cloggrum_nugget`, 8, 6],
            [`${ug}:slop_bowl`, 6, 5],
            [`${ud}:shimmerpearl`, 3, 5],
            [`${ug}:froststeel_nugget`, 8, 3],
            [`${ud}:scintling_stew`, 3, 3],
            [`${ud}:underbean_salad`, 3, 3],
            [`${ug}:regalium_crystal`, 4, 2],
            [`${ug}:cloggrum_lantern`, 3, 2],
            [`${ug}:cloggrum_ingot`, 2, 1],
        ]
        for(let [item, count, weight] of items) {
            pool.addEntry(LootEntry.of(item, [1, count]).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls(1)
        let items = [
            `${ug}:cloggrum_sword`,
            `${ug}:cloggrum_axe`,
            `${bw}:cloggrum_glaive`,
            `${bw}:cloggrum_hammer`
        ]
        pool.addEntry(LootEntry.empty().withWeight(12))
        for(let item of items) {
            pool.addEntry(enchantAndDamage_common(item))
            pool.addEntry(enchantAndDamage_rare(item))
        }
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(8))
        pool.addEntry(LootEntry.of(`${ug}:forgotten_upgrade_smithing_template`).withWeight(3))
        pool.addEntry(LootEntry.of(`${ug}:forgotten_nugget`).withWeight(1))
    })
})