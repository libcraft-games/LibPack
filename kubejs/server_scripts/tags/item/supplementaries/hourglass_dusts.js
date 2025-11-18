ServerEvents.tags('item', ev => {
    let s = 'supplementaries', e = 'enchanted'
    let ash = `${s}:ash`, wood_ash = `${e}:wood_ash`, tag = `${s}:hourglass_dusts`
    ev.remove(tag, ash)
    ev.add(tag, wood_ash)
    console.log(`applied all changes successfully!`);
})