ServerEvents.recipes(e => {
    e.custom({
        type: 'createaddition:rolling',
        ingredients: [
            {
                tag: 'c:ingots/netherite'
            }
        ],
        results: [
            {
                count: 2,
                id: 'immersiveengineering:stick_netherite'
            }
        ]
    })
})