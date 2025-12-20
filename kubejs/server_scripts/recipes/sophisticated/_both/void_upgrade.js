ServerEvents.recipes(e => {
    function asdf(e, namespace) {
        let item = `${namespace}:void_upgrade`
        let upgrade_base = `${namespace}:upgrade_base`

        e.remove({output: item})
        e.shaped(
            item,
            [
                ' O ',
                'OFO',
                ' O '
            ], 
            {
                O: '#c:obsidians',
                F: `${namespace}:filter_upgrade`
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks')
    asdf(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`);
});