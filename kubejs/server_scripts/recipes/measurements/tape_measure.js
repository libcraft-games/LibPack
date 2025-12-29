ServerEvents.recipes(e => {    
    let item = 'measurements:tape_measure'
    e.remove({output: item})
    e.shaped(item,
        [
            ' I ',
            'IGI',
            ' IG'
        ],
        {
            I: '#c:ingots/iron',
            G: '#c:ingots/gold'
        }
    )
})