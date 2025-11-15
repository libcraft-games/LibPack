ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:pump_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'BUB',
            ' C '
        ], 
        {
            U: upgrade_base,
            A: `${ie}:fluid_pump`,
            B: '#c:plates/iron',
            C: `${ie}:fluid_pipe`,
        }
    )

    console.log(`applied all changes successfully!`);
});