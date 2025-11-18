ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    let torch = `${mc}:torch`, creosote_bucket = `${ie}:creosote_bucket`, wool = `#${mc}:wool`
    e.remove({
        output: torch,
        input: wool
    })
    e.shapeless(
        `12x ${torch}`,
        [
            wool,
            creosote_bucket,
            `3x #c:rods/wooden`
        ]
    )
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:wool"
            },
            {
                "tag": "c:rods/wooden",
                "count": 3
            },
            {
                "type": "neoforge:tag",
                "amount": 1000,
                "tag": "c:creosote"
            }
        ],
        "results": [
            {
                "id": torch,
                count: 12
            }
        ]
    })
})