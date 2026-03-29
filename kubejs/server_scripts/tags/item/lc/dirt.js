
ServerEvents.tags('item', e => {
    let tag = 'lc:dirt'
    let ae = 'aether'
    let mc = 'minecraft'
    let ug = 'undergarden'
    let items = [
        `${mc}:dirt`,
        `${mc}:coarse_dirt`,
        `${mc}:soul_soil`,
        `${ae}:aether_dirt`,
        `${ug}:deepsoil`,
        `${ug}:coarse_deepsoil`,
    ]
    for(let item of items)
        e.add(tag, item)
})