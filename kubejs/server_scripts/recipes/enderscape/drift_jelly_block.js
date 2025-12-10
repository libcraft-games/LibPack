ServerEvents.recipes(e => {
    let es = 'enderscape'
    let input = `c:storage_blocks/slime`, output = `${es}:drift_jelly_block`
    e.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "tag": input
            }
        ],
        "results": [
            {
            "id": output
            }
        ]
    })
})