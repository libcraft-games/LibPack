ServerEvents.recipes(e => {
    let s = 'supplementaries'
    
    let lumisene_bucket = `${s}:lumisene_bucket`
    let lumisene_bottle = `${s}:lumisene_bottle`
    let lumisene = `${s}:lumisene`

    e.remove({output: lumisene_bucket})
    e.remove({output: lumisene_bottle})
    e.remove({id: `${s}:integration/lumisene_mixing`})

    e.custom({
        type: `${ie}:refinery`,
        energy: 600,
        input0: {fluid: 'createfood:glow_berry_juice', amount: 17},
        input1: {fluid: `${ie}:creosote`,                  amount:  8},
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

    console.log(`applied all changes successfully!`);
});