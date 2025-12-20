ServerEvents.recipes(e => {
    e.remove({type: 'create:splashing', input: 'create:crushed_raw_zinc'})
    e.custom({
        "type": "create:splashing",
        "ingredients": [
            {
            "item": "create:crushed_raw_zinc"
            }
        ],
        "results": [
            {
            "count": 9,
            "id": "create:zinc_nugget"
            },
            {
            "chance": 0.25,
            "id": "immersiveengineering:dust_sulfur"
            }
        ]
    })
})