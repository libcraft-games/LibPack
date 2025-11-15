ServerEvents.recipes(e => {
    
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
    console.log(`applied all changes successfully!`);
});