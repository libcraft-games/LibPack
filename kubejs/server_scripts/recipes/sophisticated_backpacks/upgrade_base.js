ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:upgrade_base`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'SLS',
            'IRI',
            'SLS'
        ], 
        {
            S: '#c:strings',
            L: '#c:leathers',
            I: '#c:ingots/iron',
            R: '#c:dusts/redstone'
        }
    )

    console.log(`applied changes from ${file}`);
});