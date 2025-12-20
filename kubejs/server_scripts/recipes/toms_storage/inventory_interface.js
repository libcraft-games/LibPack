ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage', mc = 'minecraft'
    let item = `${ts}:inventory_interface`
    e.remove({output: item})
    e.shapeless(`${item}`, [`${ts}:trim`, `#c:ender_pearls`, `create:item_hatch`])
})