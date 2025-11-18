ServerEvents.recipes(e => {
    e.remove({
        output: 'create:andesite_alloy',
        type: 'minecraft:crafting_shaped',
        input: 'minecraft:andesite'
    })
    e.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": "minecraft:andesite"
        },
        "input1": {
            "tag": "c:nuggets/iron"
        },
        "result": {
            "basePredicate": {
                "item": "create:andesite_alloy"
            },
            "count": 1
        }
    })
    e.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": "minecraft:andesite"
        },
        "input1": {
            "tag": "c:nuggets/zinc"
        },
        "result": {
            "basePredicate": {
                "item": "create:andesite_alloy"
            },
            "count": 1
        }
    })
    console.log(`applied all changes successfully!`)
});