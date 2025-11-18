ServerEvents.recipes(e => {
    let awning = 'supplementaries:awning'
    let stick = '#c:rods/wooden'
    let fabric = `${ie}:hemp_fabric`

    e.shaped(`2x ${awning}`,
        [ 'FFF',
          'S S'
         ],
        {
            S: stick,
            F: fabric
        }
    )

    global.libcraft.colors.forEach(color => {
        let dye = `#c:dyes/${color}`
        let color_awning = `${awning}_${color}`
        e.shapeless(
            color_awning,
            [
                awning, dye
            ]
        )
    })

    console.log(`applied all changes successfully!`);
});