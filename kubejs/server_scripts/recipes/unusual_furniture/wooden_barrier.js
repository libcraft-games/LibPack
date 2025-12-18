ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    let barrier = `${uf}:wooden_barrier`
    e.remove({output: barrier})
    e.shaped(`6x ${barrier}`,
        [
            'RSR',
            'RSR'
        ],
        {
            R: '#c:rods/iron',
            S: '#minecraft:wooden_slabs'
        }
    )
})