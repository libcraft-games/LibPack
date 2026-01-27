LootJS.lootTables(e => {
    let bp = 'biomesoplenty'
    let ch = 'chipped'
    let ew = 'enchanted'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let ns = 'nova_structures'
    let uf = 'unusual_furniture'

    let table = e.getLootTable('nova_structures:chests/witch_villa/gardening')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 8])
        let entries = [
            [`${mc}:blue_orchid`,   4, 8],
            [`${mc}:fern`,          3, 7],
            [`${mc}:large_fern`,    3, 6],
            [`${mc}:lilac`,         3, 6],
            [`${mc}:rose_bush`,     3, 6],
            [`${mc}:peony`,         3, 6],
            [`${mc}:lily_pad`,      4, 6],
            [`${bp}:huge_lily_pad`, 1, 4],
            [`${mc}:vine`,          3, 4],
            [`${bp}:spanish_moss`,  3, 4],
            [`${bp}:glowflower`,    1, 3],
            [`${ew}:spanish_moss`,  2, 2],
            [`${ew}:mutandis`,      6, 1],
            [`${bp}:rose`,          1, 1]
        ]
        for(let [item, maxCt, weight] of entries) {
            pool.addEntry(LootEntry.of(item, [1, maxCt]).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:beetroot`, [2, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:sugar_cane`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:pumpkin`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:brown_mushroom`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:red_mushroom`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${bp}:toadstool`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${bp}:glowshroom`, [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        let entries = [
            [`${mc}:beetroot_seeds`, 8],
            [`${mc}:pumpkin_seeds`, 6],
            [`${ew}:wolfsbane_seeds`, 4],
            [`${ew}:belladonna_seeds`, 3],
            [`${ew}:water_artichoke_seeds`, 2],
            [`${ew}:mandrake_seeds`, 1]
        ]
        for(let [item, weight] of entries) {
            pool.addEntry(LootEntry.of(item, [1, 4]).withWeight(weight))
        }
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:iron_hoe`).withWeight(2).damage([0.5, 0.7]))
        pool.addEntry(LootEntry.of(`${mc}:shears`).withWeight(2).damage([0.5, 0.7]))
        pool.addEntry(LootEntry.of(`${ch}:watering_can`).withWeight(1))
        pool.addEntry(LootEntry.of(`${uf}:rakes`).withWeight(1))
    })
})