ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:reactor_rod`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABCBA',
            ' DED ',
            ' DED ',
            ' DED ',
            'ABCBA',
        ],
        {
            A: `${cn}:reactor_casing`,
            B: `#c:plates/lead`,
            C: `${cn}:heat_pipe`,
            D: `${cn}:reactor_glass`,
            E: `#c:plates/hop_graphite`
        }
    )
})