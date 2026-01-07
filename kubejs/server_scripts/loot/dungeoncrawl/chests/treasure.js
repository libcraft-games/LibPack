LootJS.lootTables(e => {
    let af = 'artifacts'
    let mc = 'minecraft'
    let dc = 'dungeoncrawl'
    let su = `supplementaries`
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let vd = 'veggiesdelight'
    let ie = global.ie.namespace
    let mnd = 'mynethersdelight'

    let table = e.getLootTable(`${dc}:chests/treasure`)
    
    table.clear()
    table.createPool(pool => {
        pool.rolls([7, 13])
        pool.addEntry(LootEntry.of(`${mc}:glowstone`).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gold_block`).withWeight(3))
        pool.addEntry(LootEntry.of(`create:brass_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:storage_electrum`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/treasure/decor').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/treasure/consumables').withWeight(2).withQuality(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/treasure/artifacts').withWeight(1).withQuality(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, [
            'astartes',     'crimsonlotus', 'milo',     'phoenix', 'sunstrike',
            'harrowed',     'waaagh',       'warbird',
            'erruption',    'netherforged', 
            'kindled'
        ])).withWeight(1).withQuality(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:blaze_powder`, [7, 13]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mnd}:powder_cannon`, [5, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:fire_charge`, [3, 8]).withWeight(1))
    })
})