ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ca = 'createaddition'
    function register(e, item, casing) {
        e.remove({output: item})
        e.shaped(
            Item.of(item),
            [
                '  S  ',
                ' PRP ',
                'PTCTP',
                ' PHP '
            ],
            {
                S: 'create:shaft',
                P: casing,
                R: 'create:rotation_speed_controller',
                T: 'create:electron_tube',
                C: `${ie}:coil_lv`,
                H: `${ie}:connector_hv`
            }
        )
    }
    
    register(e, `${ca}:electric_motor`, '#c:plates/brass')
    register(e, `${ca}:alternator`, '#c:plates/steel')
})