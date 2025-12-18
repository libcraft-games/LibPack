ServerEvents.recipes(e => {    
    let ee = 'create_enchantment_industry'
    
    function asdf(e, namespace, corners) {
        let item = `${namespace}:xp_pump_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GAG',
                'BUB',
                'GCG'
            ], 
            {
                G: `#c:ingots/${corners}`,
                U: `${namespace}:advanced_pump_upgrade`,
                A: `${ee}:experience_lantern`,
                B: 'create:experience_block',
                C: `${ee}:experience_hatch`
            }
        )
    }

    asdf(e, 'sophisticatedbackpacks', 'gold')
    asdf(e, 'sophisticatedstorage', 'silver')

    console.log(`applied all changes successfully!`)
})