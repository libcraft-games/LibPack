ServerEvents.recipes(e => {
    let c  = 'create'
    let cd = 'createdeco'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let materials = [
        ['gold', mc],
        ['industrial_iron', cd],
        ['iron', mc],
        ['copper', c],
        ['zinc', c]
    ]
    function registerSmeltingAndBlasting(e, input, output) {
        e.smelting(output, input)
        e.blasting(output, input)
    }
    for(let [material, namespace] of materials) {
        registerSmeltingAndBlasting(e, `${cd}:${material}_coin`, `${namespace}:${material}_nugget`)
    }
    registerSmeltingAndBlasting(e, `${cd}:netherite_coin`, `${ie}:nugget_netherite`)
})