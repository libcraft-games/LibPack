ServerEvents.recipes(e => {
    let bg = 'buildinggadgets2', ie = 'immersiveengineering'
    let item = `${bg}:template_manager`
    e.remove({output: item})
    e.shaped(`${item}`,
        [
            'AB',
            'CD'
        ],
        {
            A: 'minecraft:ender_eye',
            B: `#c:dusts/redstone`,
            C: `${ie}:sheetmetal_aluminum`,
            D: `#c:feathers`
        }
    )
})