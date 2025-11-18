// Ash Bricks from wood ash
// soap crafting:
// - ash + quicklime + pork + water
// - ash + quicklime + seed oil/plant oil/vegetable oil
ServerEvents.recipes(ev => {
    let s = 'supplementaries', 
        e = 'enchanted',
        cf = 'createfood',
        ca = 'createaddition',
        ie = 'immersiveengineering'
    let ash = `${s}:ash`, 
        wood_ash = `${e}:wood_ash`,
        quicklime = `${e}:quicklime`,
        soap = `${s}:soap`,
        vegetable_oil = `${cf}:vegetable_oil`

    let veg_oil_buckets 
        = Ingredient.of(`${vegetable_oil}_bucket`)
                    .or(`${ie}:plantoil_bucket`)
                    .or(`${ca}:seed_oil_bucket`)
                        
    ev.remove({
        input: ash,
        output: soap
    })

    ev.shapeless(`4x ${soap}`,
        [
            `4x ${wood_ash}`,
            `2x ${quicklime}`,            
            veg_oil_buckets
        ]
    ) 
    ev.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": wood_ash,
                "count": 2
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
    ev.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": wood_ash,
                "count": 2
            },
            {
                "item": quicklime
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                fluid: "createfood:vegetable_oil"
            }
        ],
        "results": [
            {
                "id": soap,
                count: 2
            }
        ]
    })

    console.log(`applied all changes successfully!`);
});