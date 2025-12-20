ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_pickup_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GCG',
                'IUI',
                'GDG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                C: `${ie}:component_electronic`,
                I: '#c:storage_blocks/slime',
                U: `${namespace}:pickup_upgrade`,
                D: '#c:gems/diamond'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});