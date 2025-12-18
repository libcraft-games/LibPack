ServerEvents.recipes(e => {
    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_void_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GPG',
                'SUS',
                'GPG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                P: '#c:ender_pearls',
                U: `${namespace}:void_upgrade`,
                S: 'enderscape:void_shale'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});