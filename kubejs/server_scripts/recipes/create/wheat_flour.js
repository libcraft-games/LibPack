ServerEvents.recipes(e => {
    e.remove({
        type: 'create:milling',
        input: 'minecraft:wheat'
    })
    // todo: find a way to just get & modify the original recipe rather than overwriting it entirely
    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:wheat"
            }
        ],
        "processing_time": 150,
        "results": [
            {
                "id": "create:wheat_flour"
            },
            {
                "chance": 0.25,
                "count": 2,
                "id": "create:wheat_flour"
            },
            {
                "id": "farmersdelight:straw"
            },
            {
                "chance": 0.25,
                "id": "minecraft:wheat_seeds"
            }
        ]
    })
    console.log(`applied all changes successfully!`)
});