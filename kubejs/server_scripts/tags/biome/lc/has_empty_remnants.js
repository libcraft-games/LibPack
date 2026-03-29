ServerEvents.tags('minecraft:worldgen/biome', e => {    
    let tag = 'lc:has_remnants'
    let bp = 'biomesoplenty'
    let mc = 'minecraft'
    let biomes = [
        `${bp}:dryland`,
        `${bp}:dead_forest`,
        `${bp}:old_growth_dead_forest`,
        `${bp}:muskeg`,
        `${bp}:ominous_woods`,
        `${mc}:pale_garden`,
        `${bp}:wasteland`,
        `${bp}:wasteland_steppe`
    ]
    biomes.forEach(biome => {
        e.add(tag, biome)
    })
})