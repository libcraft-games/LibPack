ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage'
    let item = `${ts}:inventory_cable`
    e.remove({output: item})
    e.shapeless(`6x ${item}`, [`${ts}:trim`, `${ie}:wirecoil_redstone`])
})