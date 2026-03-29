LootJS.lootTables(e => {
    let a  = 'artifacts'
    let bw = 'basicweapons'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/archaeology/misc')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:diamond_quarterstaff`).withWeight(16).damage([0.3, 1]))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`, [1, 2]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:book`).withWeight(8).enchantRandomly(`${mc}:swift_sneak`))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:enchanted_golden_apple`).withWeight(1))
    })
})