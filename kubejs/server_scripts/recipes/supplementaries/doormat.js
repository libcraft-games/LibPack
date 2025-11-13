ServerEvents.recipes(e => {
    let file = `recipes/supplementaries/doormat.js`

    e.shaped('supplementaries:doormat',
        [ 'CC' ],
        { C: 'farmersdelight:canvas' }
    )

    console.log(`applied changes from ${file}`);
});