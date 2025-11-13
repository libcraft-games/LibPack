let file = 'recipes/measurements/tape_measure.js'

let tape_measure = 'measurements:tape_measure'

ServerEvents.recipes(e => {
    e.remove({output: tape_measure})
    e.shaped(tape_measure,
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