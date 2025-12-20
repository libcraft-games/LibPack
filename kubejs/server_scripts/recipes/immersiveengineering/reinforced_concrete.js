ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": 'c:rods/netherite'
            },
            {
                "tag": 'c:rods/netherite'
            },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: `immersiveengineering:concrete`
            }
        ],
        "results": [
            {
                id: `immersiveengineering:concrete_reinforced`
            }
        ]
    })
})