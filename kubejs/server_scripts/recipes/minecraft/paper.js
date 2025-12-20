ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": 'c:dusts/wood'
            },
            {
                "tag": 'c:dusts/wood'
            },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: `minecraft:water`
            }
        ],
        "results": [
            {
                id: `minecraft:paper`
            }
        ]
    })
})