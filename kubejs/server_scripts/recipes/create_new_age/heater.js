ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:heater`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'CCC'
        ],
        {
            A: `#c:ingots/nickel`,
            B: `#c:sheetmetals/constantan`,
            C: `${cn}:heat_pipe`
        }
    )
})