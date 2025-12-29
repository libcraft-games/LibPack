ServerEvents.recipes(e => {
    let bop = 'biomesoplenty', mc = 'minecraft'
    let a = `${bop}:null_end_stone`, b = `${bop}:null_leaves`, output = `${bop}:null_block`
    e.shaped(
        `2x ${output}`,
        [
            'ab',
            'ba'
        ],
        {
            a: a,
            b: b
        }
    )
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": a
            },
            {
                "item": b
            },
        ],
        "results": [
            {
                "id": output,
                count: 1
            }
        ]
    })
    let c = `${bop}:null_plant`
    e.shaped(
        `1x ${output}`,
        [
            'cc ',
            'c c',
            ' cc'
        ],
        {
            c: c
        }
    )
})