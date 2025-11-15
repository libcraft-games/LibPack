ServerEvents.recipes(e => {
    let item = `${ss}:cannon_ball`
    

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

    console.log(`applied all changes successfully!`);
});