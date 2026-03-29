
ServerEvents.tags('item', e => {
    let tag = 'lc:roots'
    let ew = 'enchanted'
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let ug = 'undergarden'
    let items = [
        `${mc}:mangrove_roots`,
        `${tf}:root`,
        `${tf}:root_strand`,
        `${ug}:twistytwig`,
        `${ew}:mandrake_root`
    ]
    for(let item of items)
        e.add(tag, item)
})