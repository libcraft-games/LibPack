LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    let mc = 'minecraft'
    let mnd = 'mynethersdelight'
    assembleDungeonLoot(e, 5, 
        [
            [`${mnd}:hoglin_loin`,          [3,  9], 5],
            ['minecraft:bone',              [3,  9], 4],
            [`${bop}:eyebulb`,              [1,  4], 2],
            [`${mc}:crimson_fungus`,        [2,  5], 3],
            [`${mc}:warped_fungus`,         [1,  4], 3],
            [`${bop}:flesh_tendons`,        [3, 13], 4],
            [`${mnd}:ghasta`,               [2,  4], 2],
        ],
        ['usurper', 'harrowed', 'crescentrose', 'netherforged'],
        [
            LootEntry.of('minecraft:saddle')                                .withWeight(48),
            LootEntry.of('minecraft:diamond_horse_armor')                   .withWeight(16),
            LootEntry.of('minecraft:netherite_upgrade_smithing_template')   .withWeight(6),
            LootEntry.of('create_dragons_plus:blaze_upgrade_smithing_template').withWeight(6),
            LootEntry.of('minecraft:rib_armor_trim_smithing_template')      .withWeight(6),
            LootEntry.of('supplementaries:bomb_blue', [4, 8])               .withWeight(6),
            LootEntry.of('sweety_archaeology:golden_cube')                  .withWeight(6).damage([0.35, 1]),
            LootEntry.of('artifacts:novelty_drinking_hat')                  .withWeight(4),
            LootEntry.of('artifacts:fire_gauntlet')                         .withWeight(4),
            LootEntry.of('artifacts:feral_claws')                           .withWeight(4),
            LootEntry.of('artifacts:scarf_of_invisibility')                 .withWeight(4),
            LootEntry.of('artifacts:strider_shoes')                         .withWeight(4),
            LootEntry.of('artifacts:withered_bracelet')                     .withWeight(4),
            LootEntry.of('artifacts:vampiric_glove')                        .withWeight(4),
            LootEntry.of('artifacts:obsidian_skull')                        .withWeight(4),
            LootEntry.of('artifacts:flame_pendant')                         .withWeight(4),
            LootEntry.of('elevatorid:elevator_orange', 2)                   .withWeight(3),
            LootEntry.of('minecraft:ancient_debris')                        .withWeight(1),
            LootEntry.of('minecraft:wither_skeleton_skull')                 .withWeight(1),
            LootEntry.of('minecraft:enchanted_golden_apple')                .withWeight(1),
        ],
        // potions
        [
            ['',            'fire_resistance',      3],
            ['',            'strong_strength',      3],
            ['',            'long_night_vision',    2],
            ['',            'luck',                 2],
            ['lingering_',  'strong_poison',        2],
            ['lingering_',  'undergarden:glowing',  2],
            ['splash_',     'strong_slowness',      1],
            ['lingering_',  'long_slowness',        1],
            ['lingering_',  'strong_regeneration',  1],
            ['',            'strong_regeneration',  1],
        ]
    )
})