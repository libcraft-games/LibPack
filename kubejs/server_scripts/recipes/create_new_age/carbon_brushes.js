ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:carbon_brushes`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: `#c:ingots/andesite_alloy`,
            B: `${ie}:graphite_electrode`,
            C: `create:shaft`,
            D: `${ie}:dynamo`
        }
    )
})