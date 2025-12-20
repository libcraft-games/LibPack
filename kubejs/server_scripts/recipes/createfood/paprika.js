ServerEvents.recipes(e => {
    let chili_pepper = '#c:chili_pepper'
    let paprika = 'createfood:paprika'
    let smoked_bell_pepper = 'veggiesdelight:smoked_bellpepper'
    e.remove({output: paprika})
    e.custom({
        type: "farmersdelight:cutting",
        ingredients: [{
            item: smoked_bell_pepper
        }],
        result: [{
            item: {
                count: 2,
                id: paprika
            }
        }],
        tool: {
            tag: "c:tools/knife"
        }
    })
})