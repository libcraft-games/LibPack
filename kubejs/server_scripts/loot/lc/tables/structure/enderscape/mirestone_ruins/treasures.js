LootJS.lootTables(e => {
    let af = 'artifacts'
    let bp = 'biomesoplenty'
    let cf = 'createfood'
    let ed = 'endersdelight'
    let es = 'enderscape'
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let im = 'immersive_melodies'
    let sm = 'scriptor'
    let ns = 'nova_structures'
    let su = 'supplementaries'

    e.create('lc:tables/structure/enderscape/mirestone_ruins/treasures').createPool(pool => {       
        pool.addEntry(LootEntry.of(`${mc}:book`).enchantRandomly([
            `${ns}:traveler`,
            `${ns}:outreach`,
            `${su}:stasis`,
            `${es}:transdimensional`,
            `${es}:lightspeed`
        ]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${es}:low_gravity`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(4).addPotion(`${mc}:slow_falling`))
        pool.addEntry(LootEntry.of(`${es}:music_disc_decay`)    .withWeight(4).withQuality(1)) 
        pool.addEntry(LootEntry.of(`${im}:ender_bass`)    .withWeight(3)) 
        pool.addEntry(LootEntry.of(`${sm}:identify_scroll`, [2, 4])    .withWeight(3))
        pool.addEntry(LootEntry.of(`${tf}:ender_bow`)    .withWeight(2).damage([0.15, 0.35])) 
        pool.addEntry(LootEntry.of(`${af}:warp_drive`)    .withWeight(2)) 
        pool.addEntry(LootEntry.of(`${sm}:tome_tier4`)    .withWeight(1).withQuality(2))
    })  
})