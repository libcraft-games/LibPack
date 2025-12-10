ServerEvents.recipes(e => {
    let bop = 'biomesoplenty', mc = 'minecraft'
    let input = `${bop}:origin_leaves`, output = `${bop}:null_leaves`
    e.remove({
        output: output
    })
    e.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "item": input
            }
        ],
        "results": [
            {
            "id": output
            }
        ]
    })
})