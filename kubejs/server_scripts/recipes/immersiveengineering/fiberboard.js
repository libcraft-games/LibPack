ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": 'c:dusts/wood'
            },
            {
                type: "neoforge:single",
                amount: 125,
                fluid: `immersiveengineering:phenolic_resin`
            }
        ],
        "results": [
            {
                id: `immersiveengineering:fiberboard`
            }
        ]
    })
})