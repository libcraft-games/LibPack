ServerEvents.tags('block', e => {
    let file = 'tags/block/smarterfarmers/harvest_blacklist.js'
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
    console.log(`applied changes from ${file}`);
})