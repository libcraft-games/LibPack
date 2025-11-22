ServerEvents.recipes(e => {
    let nw = 'notenoughwands'
    let item = `${nw}:building_wand`
    e.remove({output: item});
    e.shaped(
        Item.of(item),
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

    console.log(`applied all changes successfully!`);
});