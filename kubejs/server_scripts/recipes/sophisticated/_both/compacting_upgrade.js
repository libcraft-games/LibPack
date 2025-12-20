ServerEvents.recipes(e => {
    function asdf(e, namespace) {
        let output = `${namespace}:compacting_upgrade`
        let upgrade_base = `${namespace}:upgrade_base`
        e.remove({output: output})
        e.shaped(
            output,
            [
                ' P ',
                'PBP',
                ' P '
            ], 
            {
                P: 'minecraft:piston',
                B: upgrade_base
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks')
    asdf(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`);
});