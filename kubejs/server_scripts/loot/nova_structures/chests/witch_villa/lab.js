LootJS.lootTables(e => {
    let a  = 'artifacts'
    let ch = 'chipped'
    let ee = 'exposure_expanded'
    let ex = 'exposure'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let rp = 'redstonepen'
    let su = 'supplementaries'

    let table = e.getLootTable('nova_structures:chests/witch_villa/lab')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [1, 4]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:repeater`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:comparator`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:relayer`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:dispenser`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:observer`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:hopper`, [1, 2]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`create:clipboard`).withWeight(10))
        pool.addEntry(LootEntry.of(`${rp}:pen`).withWeight(9).damage([0.65, 1]))
        pool.addEntry(LootEntry.of(`${ch}:multimeter`).withWeight(7))
        pool.addEntry(LootEntry.of(`${ie}:wirecutter`).withWeight(6).damage([0.65, 1]))
        pool.addEntry(LootEntry.of(`${ee}:hires_black_and_white_film`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ee}:hires_color_film`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ee}:telescopic_lens`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:manual`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ex}:camera`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:shock_pendant`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${mc}:lightning_rod`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:redstone_lamp`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:glass`, [3, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:wirecoil_copper`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:chain`, [3, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:cut_copper`, [3, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:copper_block`, [3, 5]).withWeight(1))
    })
})