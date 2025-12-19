ServerEvents.recipes(e => {
    let chili_pepper = '#c:chili_pepper'
    let paprika = 'createfood:paprika'
    let smoked_bell_pepper = 'veggiesdelight:smoked_bellpepper'
    e.remove({output: paprika})
    e.custom({
        type: "farmersdelight:cutting",
        ingredients: [{
            item: 'supplementaries:quiver'
        }],
        result: [{
            item: {
                id: 'minecraft:leather'
            }
        }],
        tool: {
            item: "minecraft:shears"
        }
    })
    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "supplementaries:quiver"
            }
        ],
        "processing_time": 200,
        "results": [
            {
                "count": 1,
                "id": "minecraft:leather"
            },
            {
                "chance": 0.1,
                "count": 1,
                "id": "minecraft:leather"
            }
        ]
    })
})