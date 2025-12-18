ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'    
    let experiments = Ingredient.of('twilightdelight:experiment_110')
                                .or('twilightdelight:experiment_113')
                                .or('twilightforest:experiment_115')
    let gummy_swets = Ingredient.of('aether:blue_gummy_swet')
                                .or('aether:golden_gummy_swet')

    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_feeding_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GCG',
                'EUS',
                'GBG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                C: `${ie}:component_electronic_adv`,
                E: experiments,
                U: `${namespace}:feeding_upgrade`,
                S: gummy_swets,
                B: 'undergarden:slop_bowl'
            }
        )
    }
    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});