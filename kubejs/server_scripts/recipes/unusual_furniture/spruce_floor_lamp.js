ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let lamp = `${uf}:spruce_floor_lamp`
    e.remove({output: lamp})
    e.shaped(`2x ${lamp}`,
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            A: 'minecraft:paper',
            B: `${ie}:light_bulb`,
            C: `#c:rods/wooden`,
            D: `#minecraft:wooden_slabs`
        }
    )
})