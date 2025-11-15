ServerEvents.recipes(e => {
    let item = `${ss}:sail`
    

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

    console.log(`applied all changes successfully!`);
});