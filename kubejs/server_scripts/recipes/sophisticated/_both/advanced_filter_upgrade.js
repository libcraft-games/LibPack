ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'    

    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_filter_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GRG',
                'BUB',
                'GAG'
            ], 
            {
                A: 'create:attribute_filter',
                G: `#c:ingots/${corners}`,
                R: `${ie}:sorter`,
                U: `${namespace}:filter_upgrade`,
                B: '#c:ingots/brass'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});