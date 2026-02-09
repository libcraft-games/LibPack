ServerEvents.tags('item', e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    let tag = 'c:dusts/salt'
    e.add(tag, `${cf}:salt`)
    e.remove(tag, `${ed}:salt`)
})