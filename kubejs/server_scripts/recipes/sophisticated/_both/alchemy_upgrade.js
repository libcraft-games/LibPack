ServerEvents.recipes(e => {
    function asdf(e, namespace) {
        let item = `${namespace}:alchemy_upgrade`
        let upgrade_base = `${namespace}:upgrade_base`

        e.remove({output: item})
        e.shaped(
            item,
            [
                ' A ',
                'BUB',
                ' C '
            ], 
            {
                U: upgrade_base,
                A: 'minecraft:brewing_stand',
                B: '#c:rods/blaze',
                C: 'createaddition:straw'
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks')
    asdf(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`);
});