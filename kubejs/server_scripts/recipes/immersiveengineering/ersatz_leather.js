ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let mc = 'minecraft'
    let fabric = `${ie}:hemp_fabric`, honeycomb = `${mc}:honeycomb`
    let item = `${ie}:ersatz_leather`
    e.remove({output: item})
    e.shapeless(`2x ${item}`, [`4x ${fabric}`, honeycomb, `4x ${fabric}`])
})