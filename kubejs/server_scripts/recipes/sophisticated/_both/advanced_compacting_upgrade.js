ServerEvents.recipes(e => {
    function asdf(e, namespace, corners) {
        let ie = 'immersiveengineering'    
        let item = `${namespace}:advanced_compacting_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GPG',
                'IUI',
                'GEG'
            ], 
            {
                E: `${ie}:heavy_engineering`,
                G: `#c:ingots/${corners}`,
                P: 'create:mechanical_press',
                U: `${namespace}:compacting_upgrade`,
                I: '#c:plates/steel'
            }
        )
    }
    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});