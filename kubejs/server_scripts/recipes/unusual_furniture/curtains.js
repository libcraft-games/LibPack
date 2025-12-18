ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    for(let color of global.libcraft.colors) {
        let s = color == 'brown' ? 's' : ''
        let curtain = `${uf}:${color}_curtain${s}`
        let dye = `#c:dyes/${color}`
        e.remove({output: curtain})
        e.shaped(curtain, 
            [
                'S',
                'C'
            ],
            {
                S: '#c:rods/wooden',
                C: `minecraft:${color}_carpet`
            })
        e.shapeless(curtain, [`#${uf}:curtains`, dye])
    }
})