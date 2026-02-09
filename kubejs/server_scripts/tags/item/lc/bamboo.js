
ServerEvents.tags('item', e => {
    let tag = 'lc:bamboo'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    let items = [
        `${mc}:bamboo`,
        `${nd}:powdery_cannon`,
    ]
    for(let item of items)
        e.add(tag, item)
})