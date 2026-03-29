LootJS.lootTables(e => {
    assembleDungeonLoot(e, 2, 
        dc_loot.genericFillers,
        // shaders
        [],
        // treasure
        [
            LootEntry.of('minecraft:saddle').withWeight(3),
            LootEntry.of('minecraft:leather_horse_armor')
        ],
        // potions
        [
            ['',            'healing',          3],
            ['',            'strength',         3],
            ['',            'night_vision',     2],
            ['',            'luck',             2],
            ['splash_',     'strong_harming',   2],
            ['splash_',     'infested',         2],
            ['',            'regeneration',     1],
        ]
    )
})