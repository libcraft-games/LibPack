ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let create_rose_quartz = 'create:rose_quartz'
    let bop_rose_quartz = 'biomesoplenty:rose_quartz_chunk'
    let redstone = '#c:dusts/redstone'
    e.shapeless(
        Item.of(create_rose_quartz),
        [
            bop_rose_quartz,
            `3x ${redstone}`
        ]
    )
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": 'minecraft:quartz'
            },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: `${ie}:redstone_acid`
            }
        ],
        "results": [
            {
                id: create_rose_quartz
            }
        ]
    })
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": bop_rose_quartz
            },
            {
                type: "neoforge:single",
                amount: 375,
                fluid: `${ie}:redstone_acid`
            }
        ],
        "results": [
            {
                id: create_rose_quartz
            }
        ]
    })
    console.log(`applied all changes successfully!`);
});