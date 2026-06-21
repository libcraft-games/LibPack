ServerEvents.tags('item', e => {
    let ie = global.ie.namespace
    let tf = 'twilightforest'
    e.add(`${tf}:lower_on_drying_rack`, `${ie}:shield`)
})