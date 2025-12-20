ServerEvents.recipes(e => {
    let ch = 'chipped'
    function register(e, namespace, table) {
        let result = `${namespace}:${ch}/${table}_upgrade`
        let input = `${ch}:${table}`
        e.remove({output: result})
        e.shaped(
            result,
            [
                ' T ',
                'AUA',
                ' B '
            ], 
            {
                U: `${namespace}:upgrade_base`,
                T: input,
                A: '#c:ingots/iron',
                B: 'minecraft:crafting_table'
            }
        )
    }
    for(let table of [
        'botanist_workbench',
        'glassblower',
        'carpenters_table',
        'loom_table',
        'mason_table',
        'alchemy_bench',
        'tinkering_table'
    ]) {
        register(e, 'sophisticatedbackpacks', table)
        register(e, 'sophisticatedstorage', table)
    }

    console.log(`applied all changes successfully!`)
})