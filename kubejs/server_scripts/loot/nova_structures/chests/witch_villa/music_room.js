LootJS.lootTables(e => {
    let mc = 'minecraft'
    let pd = 'promotional_music_discs'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/witch_villa/music_room')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        let musicDiscs = [
            ['wait',            5],
            ['mall',            4],
            ['blocks',          4],
            ['strad',           4],
            ['lava_chicken',    1],
            ['otherside',       1]
        ]
        for(let [song, weight] of musicDiscs) {
            pool.addEntry(LootEntry.of(`${mc}:music_disc_${song}`).withWeight(weight))
        }
        pool.addEntry(LootEntry.of(`${pd}:music_disc_minecraft_live_2022`).withWeight(5))
    })
    table.createPool(pool => {
        pool.rolls([1, 6])
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).withWeight(1).addPotion(`${mc}:swiftness`))
        pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).withWeight(1).addPotion(`${mc}:leaping`))
    })
})