ServerEvents.recipes(e => {
    let ie = global.ie.namespace
    let su = 'supplementaries'
    let ug = 'undergarden'
    
    let lumisene_bucket = `${su}:lumisene_bucket`
    let lumisene_bottle = `${su}:lumisene_bottle`
    let lumisene = `${su}:lumisene`

    e.remove({output: lumisene_bucket})
    e.remove({output: lumisene_bottle})
    e.remove({id: `${su}:integration/lumisene_mixing`})
    // todo: replace glow berry juice with potion of glowing
    // also, maybe change shimmerpearl to something from another dimension?
    e.custom({
        type: `${ie}:refinery`,
        energy: 600,
        input0: {
            type: 'neoforge:components',
            amount: 15,
            components: {
                "minecraft:potion_contents": {
                    potion: `${ug}:glowing`
                }
            },
            fluids: `${ie}:potion`
        },
        input1: {fluid: `${ie}:acetaldehyde`,          amount: 10},
        catalyst: {item: "undergardendelight:shimmerpearl"},
        result: {id: lumisene, amount: 25}
    })
    // bottling recipes bc there aren't default bottle-filling recipes
    let glass_bottle = 'minecraft:glass_bottle'
    e.custom({
        type: 'create:filling',
        results: [{id: lumisene_bottle}],
        ingredients: [
            {item: glass_bottle},
            {type: 'fluid_stack', amount: 250, fluid: lumisene}
        ]
    })
    e.custom({
        type: `${ie}:bottling_machine`,
        input: {item: glass_bottle},
        fluid: {fluid: lumisene, amount: 250},
        results: [{id: lumisene_bottle}]
    })
})