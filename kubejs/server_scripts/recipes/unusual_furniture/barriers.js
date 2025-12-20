ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    let wooden_barrier = `${uf}:wooden_barrier`
    let types_and_dyes = [
        ['warning',     'white', 'red'],
        ['danger',      'white', 'orange'],
        ['road_works',  'black', 'yellow']
    ]
    for(let [type, color1, color2] of types_and_dyes) {
        let barrier = `${uf}:${type}_barrier`
        let dye1 = `#c:dyes/${color1}`, dye2 = `#c:dyes/${color2}`
        e.remove({output: barrier})
        e.shapeless(barrier, [wooden_barrier, dye1, dye2])
    }
})