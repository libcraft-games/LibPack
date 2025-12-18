ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    function asdf(e, namespace, corners) {
        let item = `${namespace}:advanced_magnet_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GCG',
                'EUE',
                'GNG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                C: `${ie}:component_electronic_adv`,
                U: `${namespace}:magnet_upgrade`,
                E: 'minecraft:ender_eye',
                N: '#c:ingots/netherite'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`);
});