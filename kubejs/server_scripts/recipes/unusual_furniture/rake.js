ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let rake = `${uf}:rakes`
    e.remove({output: rake})
    e.shaped(`${rake}`,
        [
            '  S',
            ' S ',
            'B  '
        ],
        {
            S: '#c:rods/wooden',
            B: 'minecraft:iron_bars'
        }
    )
})