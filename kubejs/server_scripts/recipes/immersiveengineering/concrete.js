ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": 'c:sands'
            },
            {
                "tag": 'c:sands'
            },
            {
                "tag": 'c:gravels'
            },
            {
                "item": 'minecraft:clay_ball'
            },
            {
                type: "neoforge:single",
                amount: 500,
                fluid: `minecraft:water`
            }
        ],
        "results": [
            {
                id: `immersiveengineering:concrete`,
                amount: 500
            }
        ]
    })
})