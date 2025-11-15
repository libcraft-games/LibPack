ServerEvents.tags('block', e => {
    
    let tag = 'smarterfarmers:harvest_blacklist'
    let ec = 'enchanted', ie = 'immersiveengineering', mc = 'minecraft'
    let items = [
        `${ec}:belladonna`,
        `${ec}:mandrake`,
        `${ec}:snowbell`,
        `${ec}:water_artichoke`,
        `${ec}:wolfsbane`,
        `${ie}:hemp`,
        `${mc}:pitcher_crop`,
        `${mc}:torchflower`
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied all changes successfully!`);
})