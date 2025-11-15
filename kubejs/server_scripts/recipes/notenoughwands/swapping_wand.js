

let nw = 'notenoughwands'
let building_wand = `${nw}:building_wand`

ServerEvents.recipes(e => {
    e.remove({output: building_wand});
    e.shaped(
        Item.of(building_wand),
        [
            'EC ',
            'CR ',
            '  R'
        ],
        {
            C: 'biomesoplenty:rose_quartz_chunk',
            E: 'minecraft:ender_eye',
            R: 'createaddition:electrum_rod'
        }
    );

    console.log(`applied all changes successfully!`);
});