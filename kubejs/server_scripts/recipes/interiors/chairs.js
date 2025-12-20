ServerEvents.recipes(e => {
    let ci = 'interiors'
    for(let color of global.libcraft.colors) {
        let chair = `${ci}:${color}_chair`
        let dye = `#c:dyes/${color}`
        e.remove({output: chair})
        e.shapeless(chair, [`2x create:${color}_seat`, `#minecraft:wooden_slabs`])
        e.shapeless(chair, [`${ci}:${color}_floor_chair`, `#minecraft:wooden_slabs`])
        e.shapeless(chair, [`#${ci}:chairs`, dye])
    }
})