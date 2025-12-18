ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let lamp = `${uf}:sphere_lamp`
    e.remove({output: lamp})
    e.shaped(`${lamp}`,
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'minecraft:daylight_detector',
            B: `${ie}:light_bulb`,
            C: '#c:glass_blocks/colorless'
        }
    )
})