let file = 'recipes/comforts/hammock.js';

ServerEvents.recipes(e => {
    global.libcraft.colors.forEach(color => {
        let hammock = `comforts:hammock_${color}`;
        let wool = `minecraft:${color}_wool`;
        e.remove({output: hammock});
        e.shaped(
            Item.of(hammock),
            [
                ' S ',
                'RWR',
                ' S '
            ],
            {
                S: '#c:rods/wooden',
                R: '#c:ropes',
                W: wool
            }
        );
    });
    console.log(`applied changes from ${file}`);
});