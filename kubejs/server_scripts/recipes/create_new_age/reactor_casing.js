ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:reactor_casing`
    let incompleteItem = `${cn}:incomplete_reactor_casing`
    e.remove({output: item})
    e.custom({
        type: `create:sequenced_assembly`,
        ingredient: {
            item: `${ie}:concrete_reinforced`
        },
        results: [
            { id: item }
        ],
        loops: 4,
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: incompleteItem },
                    { tag: `c:plates/lead` }
                ],
                results: [{ id: incompleteItem }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: incompleteItem }],
                results: [{ id: incompleteItem }]
            }
        ],
        transitional_item: { id: incompleteItem }
    })
})