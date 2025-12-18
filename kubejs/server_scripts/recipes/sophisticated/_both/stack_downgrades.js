ServerEvents.recipes(e => {
    function register(e, namespace) {
        for(let i = 1; i < 4; i++) {
            let item = `${namespace}:stack_downgrade_tier_${i}`
            e.remove({output: item})
            e.shapeless(item, [`${namespace}:upgrade_base`, `${i}x minecraft:flint`])
        }
    }

    register(e, 'sophisticatedbackpacks')
    register(e, 'sophisticatedstorage')

    console.log(`applied all changes successfully!`)
})