ServerEvents.tags('item', e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    e.remove('c:cheeses', `${cf}:cheese_slice`)
    e.add('c:cheeses', `${ed}:goat_cheese_slice`)
})