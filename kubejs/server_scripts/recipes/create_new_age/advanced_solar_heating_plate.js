ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:advanced_solar_heating_plate`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: `#c:glass_blocks/colorless`,
            B: `#c:ingots/brass`,
            C: `#c:sheetmetals/constantan`,
            D: `#c:ingots/nickel`,
            E: `${cn}:heat_pipe`
        }
    )
})