ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let nuclear_fuel = `${cn}:nuclear_fuel`
    let incomplete_fuel = `${cn}:incomplete_fuel`
    e.remove({output: nuclear_fuel})
    e.custom({
        type: `create:sequenced_assembly`,
        ingredient: {
            item: `${ie}:dust_uranium`
        },
        results: [
            { id: `${cn}:nuclear_fuel` }
        ],
        sequence: [
            {
                type: 'create:pressing',
                ingredients: [{ item: incomplete_fuel }],
                results: [{ id: incomplete_fuel }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: incomplete_fuel },
                    { tag: `c:plates/lead` }
                ],
                results: [{ id: incomplete_fuel }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: incomplete_fuel }],
                results: [{ id: incomplete_fuel }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: incomplete_fuel },
                    { tag: `c:plates/lead` }
                ],
                results: [{ id: incomplete_fuel }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: incomplete_fuel }],
                results: [{ id: incomplete_fuel }]
            }
        ],
        transitional_item: { id: incomplete_fuel }
    })
})