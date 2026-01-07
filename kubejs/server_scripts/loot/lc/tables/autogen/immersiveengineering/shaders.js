// e        loot table event
// shaders  List<string>        shaders to add to table (see global.ie.shaders)
//
// returns  string              path to new table
function ie_generateShaderTable(e, shaders) {
    let path = `lc:tables/autogen/immersiveengineering/shaders/${shaders.sort().join('_')}`
    if(!e.hasLootTable(path)) {
        e.create(path).createPool(pool => {
            for(let shader of shaders) {
                let rarity = global.ie.shaders[shader]
                let weight = global.ie.rarities.weights[rarity]
                pool.addEntry(LootEntry.of(`${ie}:shader_${shader}`).withWeight(weight))
            }
        })
    }
    return path
}