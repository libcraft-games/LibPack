ServerEvents.recipes(e => {
    let item = `${ss}:cannon_ball`
    let file = `recipes/${ss}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' B ',
            'BGB',
            ' B '
        ], 
        {
            B: '#c:ingots/lead',
            G: 'minecraft:gunpowder'
        }
    )

    console.log(`applied changes from ${file}`);
});