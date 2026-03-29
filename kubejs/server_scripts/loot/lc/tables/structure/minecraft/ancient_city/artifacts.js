LootJS.lootTables(e => {
    let a  = 'artifacts'    
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let ug = 'undergarden'

    let table = e.create('lc:tables/structure/minecraft/ancient_city/artifacts')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:diamond_horse_armor`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ug}:crumbling_catalyst`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ee}:sobel_filter`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:night_vision_goggles`).withWeight(3))
        pool.addEntry(LootEntry.of(`${a}:pickaxe_heater`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:digging_claws`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:onion_ring`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:warp_drive`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:shock_pendant`).withWeight(2))
        pool.addEntry(LootEntry.of(`${a}:novelty_drinking_hat`).withWeight(1))
        pool.addEntry(LootEntry.of(`${a}:scarf_of_invisibility`).withWeight(1))
    })
})