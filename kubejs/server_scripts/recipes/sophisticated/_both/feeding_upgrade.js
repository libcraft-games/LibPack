ServerEvents.recipes(e => {    
    function asdf(e, namespace) {
        let output = `${namespace}:feeding_upgrade`
        let upgrade_base = `${namespace}:upgrade_base`
        e.remove({output: output})
        e.shaped(
            output,
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
    }

    asdf(e, 'sophisticatedbackpacks')
    asdf(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`);
});