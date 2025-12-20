ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage', mc = 'minecraft'
    let item = `${ts}:inventory_proxy`
    e.remove({output: item})
    e.shapeless(`${item}`, [`${ts}:trim`, `${mc}:repeater`])
})