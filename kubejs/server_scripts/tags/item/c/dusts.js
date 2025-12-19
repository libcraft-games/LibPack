ServerEvents.tags('item', ev => {
    let e = 'enchanted'
    let wood_ash = `${e}:wood_ash`, tag = 'c:dusts'
    ev.add(tag, wood_ash)
})