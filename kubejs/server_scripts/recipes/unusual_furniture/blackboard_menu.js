ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    let menu = `${uf}:blackboard_menu`
    e.remove({output: menu})
    e.shaped(`${menu}`,
        [
            'RBR',
            'RBR'
        ],
        {
            R: '#c:rods/wooden',
            B: 'supplementaries:blackboard'
        }
    )
})