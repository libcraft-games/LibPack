ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let tesla_coil = 'createaddition:tesla_coil'
    
    e.remove({output: tesla_coil})
    e.shaped(
        Item.of(tesla_coil),
        [
            'AAA',
            ' C ',
            'PcP',
            'PEP'
        ],
        {
            A: '#c:ingots/aluminum',
            C: `${ie}:coil_mv`,
            P: `#c:plates/brass`,
            c: `${ie}:capacitor_hv`,
            E: `create:electron_tube`
        }
    )
})