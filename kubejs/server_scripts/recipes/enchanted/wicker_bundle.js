ServerEvents.recipes(e => {
    let ew = 'enchanted'
    let item = `${ew}:wicker_bundle`    

    e.shaped(
        `${item}`,
        [
            'AAA',
            'AAA',
            'AAA'
        ], 
        {
            A: '#lc:roots'
        }
    )
})