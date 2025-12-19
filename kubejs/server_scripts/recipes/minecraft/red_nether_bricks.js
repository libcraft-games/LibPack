ServerEvents.recipes(e => {
    let mc = 'minecraft'
    e.shaped(`6x ${mc}:red_nether_bricks`,
        [
            'BW',
            'WB'
        ],
        {
            B: `${mc}:nether_bricks`,
            W: `${mc}:nether_wart_block`
        }
    )
})