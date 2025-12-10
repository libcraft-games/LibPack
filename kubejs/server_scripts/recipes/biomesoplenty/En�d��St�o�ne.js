ServerEvents.recipes(e => {
    let bop = 'biomesoplenty', mc = 'minecraft'
    let end_stone = `${mc}:end_stone`, output = `${bop}:null_end_stone`
    e.remove({
        output: output
    })
    e.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "item": end_stone
            }
        ],
        "results": [
            {
            "id": output
            }
        ]
    })
})