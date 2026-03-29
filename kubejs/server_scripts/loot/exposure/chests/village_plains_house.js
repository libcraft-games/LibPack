LootJS.lootTables(e => {
    let table = e.getLootTable('exposure:chests/village_plains_house')
    table.clear()
    table.createPool(pool => {
        for(let i = 1; i <= 2; i++)
            pool.addEntry(exposure_AgedPhoto(`village/attack_${i}`).withWeight(1))
        for(let i = 1; i <= 4; i++)
            pool.addEntry(exposure_AgedPhoto(`village/village_${i}`).withWeight(2))
    })
})