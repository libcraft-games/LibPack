ServerEvents.recipes(e => {
    let ci = 'interiors'
    for(let color of global.libcraft.colors) {
        let chair = `${ci}:${color}_floor_chair`
        let dye = `#c:dyes/${color}`
        e.remove({output: chair})
        e.shapeless(chair, [`2x create:${color}_seat`])
        e.shapeless(chair, [`#${ci}:floor_chairs`, dye])
    }
})