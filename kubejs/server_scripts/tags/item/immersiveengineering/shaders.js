ServerEvents.tags('item', e => {
    let baseTag = 'immersiveengineering:shaders'
    let ie = global.ie.namespace
    for(let [shader, rarity] in global.ie.shaders) {
        let shaderItem = `${ie}:shader_${shader}`
        e.add(baseTag, shaderItem)
        e.add(`${baseTag}/${rarity.toLowerCase()}`, shaderItem)
    }
})