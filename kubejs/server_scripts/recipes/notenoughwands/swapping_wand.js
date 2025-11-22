ServerEvents.recipes(e => {
    let nw = 'notenoughwands'
    let item = `${nw}:swapping_wand`
    e.remove({output: item});
    e.shaped(
        Item.of(item),
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