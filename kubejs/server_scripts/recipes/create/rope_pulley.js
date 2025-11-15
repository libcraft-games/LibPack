

let rope_pulley = 'create:rope_pulley';

ServerEvents.recipes(e => {
    e.remove({output: rope_pulley});
    e.shaped(
        Item.of(rope_pulley),
        [
            'C',
            'R',
            'P'
        ],
        {
            C: 'create:andesite_casing',
            R: '#c:ropes',
            P: '#c:plates/iron'
        }
    );

    console.log(`applied all changes successfully!`);
});