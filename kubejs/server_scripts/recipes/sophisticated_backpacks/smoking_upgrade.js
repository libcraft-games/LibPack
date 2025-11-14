ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:smoking_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' P ',
            'RBS',
            ' H '
        ], 
        {
            P: '#c:foods/cooked_meat',
            S: 'minecraft:dried_kelp',
            R: '#c:foods/raw_meat',
            B: upgrade_base,
            H: 'minecraft:smoker'
        }
    )

    console.log(`applied changes from ${file}`);
});