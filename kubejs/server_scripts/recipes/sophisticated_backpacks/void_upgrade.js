ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:void_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' O ',
            'OFO',
            ' O '
        ], 
        {
            O: '#c:obsidians',
            F: `${sb}:filter_upgrade`
        }
    )

    console.log(`applied all changes successfully!`);
});