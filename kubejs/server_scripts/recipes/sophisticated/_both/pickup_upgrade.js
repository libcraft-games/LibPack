ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:pickup_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                ' A ',
                'BUB',
                ' C '
            ], 
            {
                U: `${namespace}:upgrade_base`,
                A: 'minecraft:sticky_piston',
                B: '#c:dusts/redstone',
                C: 'minecraft:hopper'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})