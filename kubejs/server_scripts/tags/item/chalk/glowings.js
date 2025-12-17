ServerEvents.tags('item', e => {
    
    let tag = 'chalk:glowings'
    let bop = 'biomesoplenty',  
        tf = 'twilightforest'
    let items = [
        'aether:ambrosium_shard',
        `${bop}:glowshroom`,
        `${bop}:glowworm_silk`,
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
    console.log(`applied all changes successfully!`);
})