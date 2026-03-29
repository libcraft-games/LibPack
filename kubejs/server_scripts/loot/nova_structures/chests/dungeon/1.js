// spotted in: remnant bunny base
// by default consists of 1-3 flower pot, 1-4 rotten flesh, 2-4 beetroot, 3-6 wheat seeds, 1-2 carrot, 3-5 beetroot seed + simple dungeon loot
LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/dungeon_1')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:carrot`, [3, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:wheat`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:beetroot_seeds`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:wheat_seeds`, [1, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:flower_pot`, [3, 5]).withWeight(1))
    })
})