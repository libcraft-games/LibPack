LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/water_supply')
    function jerrycanWithWater(mb) {
        return LootEntry.of(`${ie}:jerrycan`).jsonFunction({
            function: `${mc}:set_components`,
            components: {
                'immersiveengineering:fluid': {
                    amount: mb,
                    id: `${mc}:water`
                }
            }
        })
    }
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of('minecraft:glass_bottle', [1, 4]).withWeight(12))
        pool.addEntry(LootEntry.of('minecraft:bucket', [1, 2]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:jerrycan`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.of('minecraft:potion', [1, 4]).withWeight(36).addPotion(`${mc}:water`))
        pool.addEntry(LootEntry.of('minecraft:water_bucket', [1, 2]).withWeight(18))
        pool.addEntry(jerrycanWithWater(3000).withWeight(1))
        pool.addEntry(jerrycanWithWater(7000).withWeight(1))
        pool.addEntry(jerrycanWithWater(10000).withWeight(1))
    })
})