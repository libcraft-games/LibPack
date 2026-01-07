const dc_loot = {
    // string,  int,  (int minStage, int maxStage)
    // item id, tier,   range (both endsinclusive)
    resources: [
        [`minecraft:copper_ingot`,              0,  [1, 3]],
        [`minecraft:resin_clump`,               4,  null],
        [`minecraft:iron_ingot`,                1,  null],
        [`create:zinc_ingot`,                   1,  [1, 3]],
        [`immersiveengineering:ingot_aluminum`, 4,  null],
        [`minecraft:gold_ingot`,                2,  null],
        [`immersiveengineering:ingot_silver`,   3,  null],
        [`minecraft:diamond`,                   3,  null],
        [`minecraft:emerald`,                   2,  null],
        [`minecraft:lapis_lazuli`,              1,  [1, 3]],
        [`minecraft:ender_pearl`,               4,  null],
        [`minecraft:ender_eye`,                 5,  null],
        [`minecraft:redstone`,                  2,  null],
        [`minecraft:fire_charge`,               4,  null],
        [`minecraft:amethyst_shard`,            2,  [1, 4]],
        [`minecraft:quartz`,                    3,  [5, 5]],
        [`minecraft:slime_ball`,                3,  [1, 4]],
        [`minecraft:magma_cream`,               3,  [5, 5]],
        [`minecraft:clay_ball`,                 1,  [1, 4]],
        [`minecraft:brick`,                     2,  [5, 5]],
        [`minecraft:gunpowder`,                 2,  [2, 4]],
        [`minecraft:glowstone_dust`,            4,  [5, 5]],
        [`minecraft:honeycomb`,                 1,  [1, 3]],
        [`minecraft:cocoa_beans`,               3,  [4, 4]],
        [`minecraft:ink_sac`,                   1,  [1, 3]],
        [`minecraft:glow_ink_sac`,              3,  [4, 5]],
    ],
    armor: [
        [`leather`,   0],
        [`chainmail`, 1],
        [`iron`,      2],
        [`golden`,    3],
        [`diamond`,   4]
    ],
    toolMaterials: [
        ['stone',   1],
        ['iron',    2],
        ['golden',  3],
        ['diamond', 4]
    ],
    // namespace, type, weight
    weaponWeights: [
        ['basicweapons',    'dagger',       4],
        ['basicweapons',    'quarterstaff', 3],
        ['minecraft',       'sword',        3],
        ['basicweapons',    'spear',        2],
        ['basicweapons',    'club',         1],
        ['minecraft',       'axe',          1],
        ['basicweapons',    'glaive',       1],
        ['basicweapons',    'hammer',       1],
        ['minecraft',       'shovel',       3],
        ['minecraft',       'hoe',          1],
        ['minecraft',       'pickaxe',      2],
        ['farmersdelight',  'knife',        1]
    ],
    materiallessWeapons: [
        ['minecraft:shield',    1],
        ['minecraft:bow',       2],
        ['minecraft:crossbow',  3],
    ],
    // itemId, count, weight
    genericFillers: [
        ['minecraft:rotten_flesh',      [3,  9], 5],
        ['minecraft:bone',              [3,  9], 4],
        ['minecraft:spider_eye',        [1,  4], 2],
        ['minecraft:brown_mushroom',    [2,  5], 3],
        ['minecraft:red_mushroom',      [1,  4], 3],
        ['minecraft:cobweb',            [3, 13], 4],
        ['minecraft:string',            [2,  4], 2],
    ],
    // itemId, count, weight, minStage
    food: [
        ['minecraft:bread',             [4, 7],     5,     1],
        ['farmersdelight:cooked_bacon', [4, 7],     4,     1],
        ['minecraft:mushroom_stew',     [2, 5],     3,     1],
        ['minecraft:golden_carrot',     [1, 3],     2,     3],
        ['minecraft:golden_apple',      1,          1,     4],
    ],
}