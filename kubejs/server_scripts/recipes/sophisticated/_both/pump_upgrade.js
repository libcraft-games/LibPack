ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:pump_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                ' A ',
                'BUB',
                ' A '
            ], 
            {
                U: `${namespace}:upgrade_base`,
                A: `create:mechanical_pump`,
                B: `create:fluid_pipe`,
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})