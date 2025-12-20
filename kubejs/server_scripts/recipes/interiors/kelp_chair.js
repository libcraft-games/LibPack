ServerEvents.recipes(e => {
    let ci = 'interiors'
    e.shapeless(`${ci}:kelp_chair`, [`2x ${ci}:kelp_seat`, `#minecraft:wooden_slabs`])
    e.shapeless(`${ci}:kelp_chair`, [`${ci}:kelp_floor_chair`, `#minecraft:wooden_slabs`])
})