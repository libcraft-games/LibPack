ServerEvents.recipes(e => {
    let bop = 'biomesoplenty', mc = 'minecraft'
    let input = `${bop}:null_block`, output = `${bop}:liquid_null`
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": input
            },
        ],
        "results": [
            {
                id: output,
                amount: 250
            }
        ]
    })
})