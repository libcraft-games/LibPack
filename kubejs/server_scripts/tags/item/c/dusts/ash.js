ServerEvents.tags('item', ev => {
    let s = 'supplementaries', e = 'enchanted'
    let ash = `${s}:ash`, wood_ash = `${e}:wood_ash`, tag = 'c:dusts/ash'
    ev.add(tag, ash)
    ev.add(tag, wood_ash)
})