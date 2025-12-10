ServerEvents.recipes(e => {
    let bop = 'biomesoplenty', mc = 'minecraft'
    let input = `${bop}:rose`, output = `${bop}:null_plant`
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