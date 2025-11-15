ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_feeding_upgrade`
    

    let experiments = Ingredient.of('twilightdelight:experiment_110')
                                .or('twilightdelight:experiment_113')
                                .or('twilightforest:experiment_115')
    let gummy_swets = Ingredient.of('aether:blue_gummy_swet')
                                .or('aether:golden_gummy_swet')
    
    e.remove({output: item})
    e.shaped(
        item,
        [
            'GCG',
            'EUS',
            'GBG'
        ], 
        {
            G: '#c:plates/gold',
            C: `${ie}:component_electronic_adv`,
            E: experiments,
            U: `${sb}:feeding_upgrade`,
            S: gummy_swets,
            B: 'undergarden:slop_bowl'
        }
    )

    console.log(`applied all changes successfully!`);
});