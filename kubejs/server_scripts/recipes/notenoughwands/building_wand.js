let file = "recipes/notenoughwands/building_wand.js";

let nw = 'notenoughwands'
let building_wand = `${nw}:building_wand`

ServerEvents.recipes(e => {
    e.remove({output: building_wand});
    e.shaped(
        Item.of(building_wand),
        [
            'EB ',
            'BR ',
            '  R'
        ],
        {
            B: '#chipped:bricks',
            E: 'minecraft:ender_eye',
            R: 'createaddition:electrum_rod'
        }
    );

    console.log(`applied changes from ${file}`);
});