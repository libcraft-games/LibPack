LootJS.lootTables(e => {
    assembleDungeonLoot(e, 1, 
        // fillers
        dc_loot.genericFillers,
        // shaders
        [],
        // treasure
        [
            LootEntry.of('minecraft:saddle').withWeight(3)
        ],
        // potions
        [
            ['',            'healing',      2],
            ['',            'strength',     2],
            ['',            'luck',         1],
            ['splash_',     'harming',      1]
        ]
    )
})