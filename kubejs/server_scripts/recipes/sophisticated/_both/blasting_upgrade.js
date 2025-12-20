ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:blasting_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                ' A ',
                'AUA',
                ' B '
            ], 
            {
                U: `${namespace}:upgrade_base`,
                A: 'minecraft:smooth_stone',
                B: 'minecraft:blast_furnace'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})