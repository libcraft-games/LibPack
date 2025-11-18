ServerEvents.recipes(e => {
    let ed = 'endersdelight'
    let ender_shard = `${ed}:ender_shard`
    let ender_pearl = 'c:ender_pearls'
    e.remove({
        output: ender_shard,
        type: 'farmersdelight:cutting'
    })
    e.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "tag": ender_pearl
            }
        ],
        "results": [
            {
                "id": ender_shard,
                "count": 2
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": ender_pearl
            }
        ],
        "processing_time": 200,
        "results": [
            {
                "id": ender_shard,
                "count": 2
            },
            {
                "chance": 0.5,
                "id": ender_shard
            }
        ]
    })
    console.log(`applied all changes successfully!`)
});