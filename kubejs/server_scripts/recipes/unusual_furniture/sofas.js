ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    for(let color of global.libcraft.colors) {
        let sofa = `${uf}:${color}_sofa`
        let dye = `#c:dyes/${color}`
        e.remove({output: sofa})
        e.shapeless(sofa, [`interiors:${color}_cushion`])
        e.shapeless(sofa, [`#${uf}:sofas`, dye])
    }
})