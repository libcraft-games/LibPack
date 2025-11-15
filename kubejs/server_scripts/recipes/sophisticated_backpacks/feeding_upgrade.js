ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:feeding_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'DUB',
            ' C '
        ], 
        {
            U: upgrade_base,
            A: '#farmersdelight:meals',
            B: '#farmersdelight:feasts',
            C: 'farmersdelight:dog_food',
            D: "#c:foods/soup"
        }
    )

    console.log(`applied all changes successfully!`);
});