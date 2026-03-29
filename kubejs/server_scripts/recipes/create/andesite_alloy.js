ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let mc = 'minecraft'
    e.remove({
        output: 'create:andesite_alloy',
        type: 'minecraft:crafting_shaped',
        input: 'minecraft:andesite'
    })
    let iron_nugget = `#c:nuggets/iron`
    let zinc_nugget = `#c:nuggets/zinc`
    let andesite = `${mc}:andesite`
    let alloy = `create:andesite_alloy`
    ie_AddAlloy(e, ie_BP(zinc_nugget), ie_BP(andesite), ie_BP(alloy))
    ie_AddAlloy(e, ie_BP(iron_nugget), ie_BP(andesite), ie_BP(alloy))
})