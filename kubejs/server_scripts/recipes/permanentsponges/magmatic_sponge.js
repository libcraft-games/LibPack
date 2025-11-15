

let ps = 'permanentsponges'

ServerEvents.recipes(e => {
    let sponge = `${ps}:magmatic_sponge`
    e.remove({output: sponge});
    e.shaped(
        Item.of(sponge),
        [
            'SSS',
            'SBS',
            'SSS'
        ],
        {
            S: 'minecraft:sponge',
            B: 'create:blaze_cake'
        }
    );

    console.log(`applied all changes successfully!`);
});