ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_alchemy_upgrade`
    let file = `recipes/${sb}/${item}.js`

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
            G: '#c:plates/gold',
            U: `${sb}:alchemy_upgrade`,
            C: 'twilightforest:greater_potion_flask',
            B: 'minecraft:comparator'
        }
    )
    console.log(`applied changes from ${file}`);
});