ServerEvents.recipes(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let netherite_scrap = `${mc}:netherite_scrap`
    let netherite_ingot = `${mc}:netherite_ingot`
    let gold_ingot = `#c:ingots/gold`
    e.remove({
        input: netherite_scrap,
        output: netherite_ingot
    })
    ie_AddAlloy(e, ie_BP(netherite_scrap, 4), ie_BP(gold_ingot, 4), ie_BP(netherite_ingot))
})