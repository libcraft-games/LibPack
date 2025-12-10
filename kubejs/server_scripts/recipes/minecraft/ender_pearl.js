ServerEvents.recipes(e => {
    let cc = 'crittersandcompanions', mc = 'minecraft'
    let pearl = `${cc}:pearl`, ender_pearl = `${mc}:ender_pearl`
    e.remove({
        output: ender_pearl,
        input: pearl
    })
    e.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "item": pearl
            }
        ],
        "results": [
            {
            "id": ender_pearl
            }
        ]
    })
})