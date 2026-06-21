ServerEvents.recipes(e => {
    let rp = 'repackaged'

    let item = `${rp}:energy_gauge`
    e.remove({output: item})
    e.shapeless(`2x ${item}`, [
        `create:precision_mechanism`,
        `#c:plates/brass`
    ])
})