ServerEvents.tags('item', e => {
    let file = 'tags/item/chalk/glowings.js'
    let tag = 'chalk:glowings'
    let bop = 'biomesoplenty', 
        es = 'eternal_starlight', 
        tf = 'twilightforest'
    let items = [
        'aether:ambrosium_shard',
        `${bop}:glowshroom`,
        `${bop}:glowworm_silk`,
        `${es}:glowing_mushroom`,
        `${es}:marimold`,
        'minecraft:glow_berries',
        `${tf}:firefly`,
        `${tf}:mushgloom`,
        `${tf}:torchberries`,
        `${tf}:trollber`,
        `undergarden:shimmerweed`,
        `undergardendelight:shimmerpearl`
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied changes from ${file}`);
})