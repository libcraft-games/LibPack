ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage', mc = 'minecraft'
    let item = `${ts}:basic_inventory_hopper`
    e.remove({output: item})
    e.shapeless(`${item}`, [`${ts}:inventory_cable`, `${mc}:hopper`])
})