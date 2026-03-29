ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:heat_pipe`
    e.remove({output: item})
    e.shaped(
        `6x ${item}`,
        [
            'ABA',
            'BAB'
        ],
        {
            A: `#c:bricks`,
            B: `#c:plates/constantan`,
        }
    )
})