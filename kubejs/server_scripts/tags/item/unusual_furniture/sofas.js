ServerEvents.tags('item', e => {
    let uf = 'unusual_furniture'
    for(let color of global.libcraft.colors) {
        e.add(`${uf}:sofas`, `${uf}:${color}_sofa`)
    }
})