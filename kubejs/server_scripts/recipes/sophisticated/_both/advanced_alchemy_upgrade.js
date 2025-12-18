ServerEvents.recipes(e => {
    function asdf(e, namespace, corners) {
        let ie = 'immersiveengineering'    
        let item = `${namespace}:advanced_alchemy_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GAG',
                'BUB',
                'GCG'
            ], 
            {
                A: 'enchanted:distillery',
                G: `#c:ingots/${corners}`,
                U: `${namespace}:alchemy_upgrade`,
                C: 'twilightforest:greater_potion_flask',
                B: 'minecraft:comparator'
            }
        )
    }
    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});