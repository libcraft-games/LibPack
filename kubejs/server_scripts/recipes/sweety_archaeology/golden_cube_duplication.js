ServerEvents.recipes(e => {
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            { "tag": "c:storage_blocks/gold" },
            { "item": "sweety_archaeology:golden_cube" },
            {
                "type": "fluid_stack",
                "amount": 1000,
                "fluid": "create_enchantment_industry:experience"
            }
        ],
        "results": [
            {
                "id": "sweety_archaeology:golden_cube",
                "count": 2
            }
        ]
    })
    console.log(`applied all changes successfully!`)
});