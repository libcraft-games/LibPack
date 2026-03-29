ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:reactor_glass`
    e.remove({output: item})
    e.shaped(
        `2x ${item}`,
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: `#c:glass_blocks/colorless`,
            B: `#c:rods/netherite`,
            C: `#c:sheetmetals/lead`
        }
    )
})