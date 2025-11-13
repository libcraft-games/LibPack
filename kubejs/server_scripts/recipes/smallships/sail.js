ServerEvents.recipes(e => {
    let item = `${ss}:sail`
    let file = `recipes/${ss}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'FFF',
            'WFW',
            'RFR'
        ], 
        {
            F: '#minecraft:wooden_fences',
            W: `${ie}:windmill_sail`,
            R: '#c:ropes'
        }
    )

    console.log(`applied changes from ${file}`);
});