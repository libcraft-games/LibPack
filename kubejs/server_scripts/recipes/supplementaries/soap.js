ServerEvents.recipes(e => {
    let su = 'supplementaries', 
        ew = 'enchanted',
        ca = 'createaddition',
        ie = global.ie.namespace
    let ash = `${su}:ash`, 
        ashes = `c:dusts/ash`,
        quicklime = `${ew}:quicklime`,
        soap = `${su}:soap`

    let veg_oil_buckets 
        = Ingredient.of(`${ie}:plantoil_bucket`)
                    .or(`${ca}:seed_oil_bucket`)
                        
    e.remove({
        input: ash,
        output: soap
    })

    e.shapeless(`4x ${soap}`,
        [
            `4x #${ashes}`,
            `2x ${quicklime}`,            
            veg_oil_buckets
        ]
    ) 
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": ashes
            },
            {
                "tag": ashes
            },
            {
                "item": quicklime
            },
            { 
                "type": "neoforge:tag",
                "amount": 500,
                "tag": "c:plantoil"
            }
        ],
        "results": [
            {
                "id": soap,
                count: 2
            }
        ]
    })
})