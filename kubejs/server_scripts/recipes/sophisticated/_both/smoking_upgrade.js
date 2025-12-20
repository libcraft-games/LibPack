ServerEvents.recipes(e => {
    function register(e, namespace) {
        let item = `${namespace}:smoking_upgrade`
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
                A: '#minecraft:logs',
                B: 'minecraft:smoker'
            }
        )
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})