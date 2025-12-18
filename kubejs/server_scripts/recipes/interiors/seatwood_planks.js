ServerEvents.recipes(e => {
    let ci = 'interiors'
    e.shaped(`3x ${ci}:seatwood_planks`,
        [
            'SB',
            'BS'
        ],
        {
            S: '#minecraft:wooden_slabs',
            B: '#minecraft:planks'
        }
    )
})