ServerEvents.recipes(e => {
    let ci = 'interiors'
    e.shaped(`6x ${ci}:wall_mounted_table`,
        [
            'PP'
        ],
        {
            P: `${ci}:seatwood_planks`
        }
    )
})