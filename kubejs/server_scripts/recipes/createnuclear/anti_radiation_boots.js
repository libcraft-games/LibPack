ServerEvents.recipes(e => {
    let cn = 'createnuclear', ie = 'immersiveengineering'
    let item = `${cn}:anti_radiation_boots`
    e.remove({input: '#c:ingots/lead', output: item})
    e.shaped(item,
        [
            'L L',
            'P P'
        ],
        {
            P: `#c:plates/lead`,
            L: `${ie}:ersatz_leather`
        }
    )
    console.log(`applied all changes successfully!`);
})