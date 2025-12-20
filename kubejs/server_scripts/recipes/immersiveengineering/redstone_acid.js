ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": 'c:dusts/redstone'
            },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: `minecraft:water`
            }
        ],
        "results": [
            {
                id: `immersiveengineering:redstone_acid`,
                amount: 250
            }
        ]
    })
})