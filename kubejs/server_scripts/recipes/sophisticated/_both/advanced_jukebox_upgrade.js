ServerEvents.recipes(e => {
    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_jukebox_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GAG',
                'BUB',
                'GCG'
            ], 
            {
                A: 'minecraft:hopper',
                G: `#c:ingots/${corners}`,
                C: 'minecraft:comparator',
                U: `${namespace}:jukebox_upgrade`,
                B: '#c:gems/diamond'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});