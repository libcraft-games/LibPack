ServerEvents.recipes(e => {
    let rp = 'repackaged'

    let item = `${rp}:fluid_gauge`
    e.remove({output: item})
    e.shapeless(`2x ${item}`, [
        `create:precision_mechanism`,
        `create:fluid_pipe`
    ])
})