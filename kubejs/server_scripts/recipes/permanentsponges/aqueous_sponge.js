

let ps = 'permanentsponges'

ServerEvents.recipes(e => {
    let sponge = `${ps}:aqueous_sponge`
    e.remove({output: sponge});
    e.shaped(
        Item.of(sponge),
        [
            'SSS',
            'SHS',
            'SSS'
        ],
        {
            S: 'minecraft:sponge',
            H: 'minecraft:heart_of_the_sea'
        }
    );

    console.log(`applied all changes successfully!`);
});