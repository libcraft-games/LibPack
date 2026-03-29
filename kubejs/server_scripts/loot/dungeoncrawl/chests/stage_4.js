LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let cc = 'crittersandcompanions'
    assembleDungeonLoot(e, 4, 
        [
            ['minecraft:rotten_flesh',              [3,  9], 5],
            ['minecraft:bone',                      [3,  9], 4],
            ['minecraft:fermented_spider_eye',      [1,  4], 2],
            [`${fd}:brown_mushroom_colony`,         [2,  5], 3],
            [`${fd}:red_mushroom_colony`,           [1,  4], 3],
            ['minecraft:vine',                      [3, 13], 4],
            ['minecraft:string',                    [2,  4], 2],
        ],
        ['dragonsbreath', 'stormflower', 'ancient'],
        [
            LootEntry.of('minecraft:saddle')                                .withWeight(48),
            LootEntry.of('minecraft:golden_horse_armor')                    .withWeight(16),
            LootEntry.of('simplest_hammers:hammer_smithing_template')       .withWeight(6),
            LootEntry.of('simplest_excavators:excavator_smithing_template') .withWeight(6),
            LootEntry.of('minecraft:wild_armor_trim_smithing_template')     .withWeight(6),
            LootEntry.of('artifacts:plastic_drinking_hat')                  .withWeight(4),
            LootEntry.of('artifacts:power_glove')                           .withWeight(4),
            LootEntry.of('artifacts:feral_claws')                           .withWeight(4),
            LootEntry.of('artifacts:superstitious_hat')                     .withWeight(4),
            LootEntry.of('artifacts:kitty_slippers')                        .withWeight(4),
            LootEntry.of('artifacts:onion_ring')                            .withWeight(4),
            LootEntry.of('artifacts:crystal_heart')                         .withWeight(4),
            LootEntry.of('artifacts:antidote_vessel')                       .withWeight(4),
            LootEntry.of('artifacts:thorn_pendant')                         .withWeight(4),
            LootEntry.of('sweety_archaeology:golden_cube')                  .withWeight(3)  .damage([0.15, 0.75]),
        ],
        // potions
        [
            ['',            'strong_healing',       3],
            ['',            'long_strength',        3],
            ['',            'long_night_vision',    2],
            ['',            'luck',                 2],
            ['splash_',     'strong_poison',        2],
            ['splash_',     'oozing',               2],
            ['splash_',     'long_slowness',        2],
            ['splash_',     'strong_regeneration',  1],
            ['',            'long_regeneration',    1],
        ]
    )
})