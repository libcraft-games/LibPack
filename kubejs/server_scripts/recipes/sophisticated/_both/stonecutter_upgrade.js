ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:stonecutter_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                ' B ',
                'AUA',
                ' C '
            ], 
            {
                U: `${namespace}:upgrade_base`,
                A: '#c:ingots/iron',
                B: 'minecraft:stonecutter',
                C: '#c:stones'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})