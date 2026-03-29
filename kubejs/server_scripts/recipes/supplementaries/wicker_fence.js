ServerEvents.recipes(e => {
    let s = 'supplementaries'
    let item = `${s}:wicker_fence`    

    e.remove({output: item})
    e.shaped(
        `3x ${item}`,
        [
            'SSS',
            'SSS'
        ], 
        {
            S: '#c:rods/wooden'
        }
    )
    e.shaped(
        `6x ${item}`,
        [
            'SSS',
            'SSS'
        ], 
        {
            S: '#lc:roots'
        }
    )
})