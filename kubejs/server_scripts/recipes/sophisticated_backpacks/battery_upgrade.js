ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:battery_upgrade`
    let file = `recipes/${sb}/${item}.js`

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
            A: `${ie}:connector_lv`,
            B: `${ie}:insulating_glass`,
            C: `${ie}:capacitor_lv`,
        }
    )

    console.log(`applied changes from ${file}`);
});