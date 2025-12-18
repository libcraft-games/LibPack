ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:magnet_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                ' A ',
                'DUB',
                ' C '
            ], 
            {
                U: `${namespace}:pickup_upgrade`,
                A: `${ie}:coil_lv`,
                B: '#c:dusts/redstone',
                C: '#c:ingots/nickel',
                D: '#c:ender_pearls'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})