ServerEvents.recipes(e => {
    let s = 'supplementaries'
    let item = `${s}:wicker_fence`
    let file = `recipes/${s}/${item}.js`

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

    console.log(`applied changes from ${file}`);
});