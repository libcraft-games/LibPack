ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:smelting_upgrade`
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
                A: '#c:cobblestones',
                B: 'minecraft:furnace'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})