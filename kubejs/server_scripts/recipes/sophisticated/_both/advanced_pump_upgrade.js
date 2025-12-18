ServerEvents.recipes(e => {
    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_pump_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GAG',
                'BUB',
                'GCG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                U: `${namespace}:pump_upgrade`,
                A: `${ie}:fluid_sorter`,
                B: `${ie}:fluid_pump`,
                C: 'create:hose_pulley'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')
    console.log(`applied all changes successfully!`);
});