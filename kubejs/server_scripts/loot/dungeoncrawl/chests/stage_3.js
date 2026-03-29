LootJS.lootTables(e => {
    assembleDungeonLoot(e, 3, 
        dc_loot.genericFillers,
        ['angelsthesis', 'locus'],
        [
            LootEntry.of('minecraft:saddle')                                .withWeight(12),
            LootEntry.of('minecraft:iron_horse_armor')                      .withWeight(4),
            LootEntry.of('simplest_hammers:hammer_smithing_template')       .withWeight(1),
            LootEntry.of('simplest_excavators:excavator_smithing_template') .withWeight(1),
        ],
        // potions
        [
            ['',            'strong_healing',       3],
            ['',            'long_strength',        3],
            ['',            'night_vision',         2],
            ['',            'luck',                 2],
            ['splash_',     'poison',               2],
            ['splash_',     'weaving',              2],
            ['splash_',     'slowness',             2],
            ['splash_',     'regeneration',         1],
            ['',            'long_regeneration',    1],
        ]
    )
})