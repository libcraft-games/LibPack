ServerEvents.recipes(e => {
    let file = 'recipes/measurements/tape_measure.js'
    let item = 'measurements:tape_measure'
    e.remove({output: item})
    e.shaped(item,
        [
            ' IY',
            'INI',
            ' IN'
        ],
        {
            I: '#c:ingots/iron',
            N: '#c:ingots/nickel',
            Y: '#minecraft:dyes/yellow'
        }
    )
    console.log(`applied changes from ${file}`);
});