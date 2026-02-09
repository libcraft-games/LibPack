ServerEvents.tags('item', e => {
    let ed = 'expandeddelight'
    let ew = 'enchanted'
    let wood_ash = `${ew}:wood_ash`, tag = 'c:dusts', salt = `${ed}:salt`
    e.add(tag, wood_ash)
    e.remove(tag, salt)
})