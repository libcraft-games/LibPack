ServerEvents.tags('item', e => {
    let uf = 'unusual_furniture'
    for(let color of global.libcraft.colors) {
        let s = color == 'brown' ? 's' : ''
        e.add(`${uf}:curtains`, `${uf}:${color}_curtain${s}`)
    }
})