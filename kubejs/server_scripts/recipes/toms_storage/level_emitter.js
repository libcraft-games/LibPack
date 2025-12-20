ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage', mc = 'minecraft'
    let item = `${ts}:level_emitter`
    e.remove({output: item})
    e.shapeless(`${item}`, [`${ts}:inventory_cable`, `${mc}:comparator`])
})