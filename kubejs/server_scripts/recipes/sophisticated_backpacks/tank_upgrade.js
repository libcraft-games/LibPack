ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:tank_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'BUB',
            ' A '
        ], 
        {
            U: upgrade_base,
            A: 'create:fluid_tank',
            B: `${ie}:metal_barrel`,
        }
    )

    console.log(`applied changes from ${file}`);
});