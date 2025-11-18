ServerEvents.recipes(e => {
    let s = 'supplementaries'
    let item = `${s}:wicker_fence`    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'SSS',
            'SSS'
        ], 
        {
            S: '#c:rods/wooden'
        }
    )

    console.log(`applied all changes successfully!`);
});