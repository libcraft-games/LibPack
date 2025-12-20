ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage', ie = 'immersiveengineering'
    let item = `${ss}:advanced_hopper_upgrade`    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'cAc',
            'BUB',
            'cCc'
        ], 
        {
            U: `${ss}:hopper_upgrade`,
            c: '#c:ingots/silver',
            A: `${ie}:component_electronic`,
            B: `#c:ingots/iron`,
            C: 'create:smart_chute'
        }
    )

    console.log(`applied all changes successfully!`)
})