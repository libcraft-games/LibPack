

ServerEvents.recipes(e => {
    // remove the 5 (!) conflicting lead recipes
    e.remove({output: 'minecraft:lead'});
    e.shaped(
        '3x minecraft:lead',
        [
            'RR ',
            'RR ',
            '  R'
        ],
        {
            R: '#c:ropes'
        }
    );
    console.log(`applied all changes successfully!`);
});