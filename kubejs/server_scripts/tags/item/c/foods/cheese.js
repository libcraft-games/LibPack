ServerEvents.tags('item', e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    e.remove('c:foods/cheese', `${cf}:cheese_slice`)
    e.add('c:foods/cheese', `${ed}:cheese_slice`)
    e.add('c:foods/cheese', `${ed}:goat_cheese_slice`)
})