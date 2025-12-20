ServerEvents.recipes(e => {
    function register(e, namespace, corners) {
        for(let type of ['smelting', 'smoking', 'blasting']) {
            let item = `${namespace}:auto_${type}_upgrade`
            e.remove({output: item})
            e.shaped(item,
                [
                    'GAG',
                    'BUB',
                    'GCG'
                ], 
                {
                    G: `#c:ingots/${corners}`,
                    U: `${namespace}:${type}_upgrade`,
                    A: `${ie}:component_electronic`,
                    B: 'minecraft:bricks',
                    C: 'minecraft:hopper'
                }
            )
        }
    }

    register(e, 'sophisticatedbackpacks', 'gold')
    register(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`)
})