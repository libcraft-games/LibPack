ServerEvents.recipes(e => {
    function asdf(e, namespace) {
        let output = `${namespace}:filter_upgrade`
        let upgrade_base = `${namespace}:upgrade_base`
        e.remove({output: output})
        e.shaped(
            output,
            [
                ' C ',
                'RBR',
                ' L '
            ], 
            {
                C: 'minecraft:comparator',
                L: 'create:filter',
                R: '#c:dusts/redstone',
                B: upgrade_base
            }
        )
        e.shaped(
            output,
            [
                ' C ',
                'RBR',
                'IWI'
            ], 
            {
                C: 'minecraft:comparator',
                I: '#c:nuggets/iron',
                R: '#c:dusts/redstone',
                B: upgrade_base,
                W: '#minecraft:wool'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks')
    asdf(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`);
});