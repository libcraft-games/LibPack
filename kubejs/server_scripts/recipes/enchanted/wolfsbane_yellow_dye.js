let file = "recipes/enchanted/wolfsbane_yellow_dye.js";

let yellow_dye = 'minecraft:yellow_dye';
let wolfsbane = 'enchanted:wolfsbane_flower';

ServerEvents.recipes(e => {
    e.shapeless(
        Item.of(yellow_dye),
        [wolfsbane]
    )
    e.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{item: wolfsbane}],
        tool: {tag: 'c:tools/knife'},
        result: [{item: Item.of(yellow_dye), count: 2}]
    })
    e.custom({
        type: 'create:milling',
        processing_time: 50,
        ingredients: [{item: wolfsbane}],
        results: 
        [
            {id: yellow_dye, count: 1},
            {id: yellow_dye, chance: 0.85},
            {id: 'enchanted:wolfsbane_seeds', chance: 0.05}
        ]
    })

    console.log(`applied changes from ${file}`);
});