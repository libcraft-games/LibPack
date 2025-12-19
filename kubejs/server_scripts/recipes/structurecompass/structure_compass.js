ServerEvents.recipes(e => {
    let item = `structurecompass:structure_compass`
    e.remove({output: item})
    e.shaped(item,
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'sweety_archaeology:golden_cube',
            B: '#c:ingots/uranium',
            C: 'twilightforest:crown_splinter',
            D: '#c:ingots/cloggrum',
            E: 'minecraft:ender_eye',
            F: '#c:ingots/ironwood',
            G: '#c:gems/regalium',
            H: '#c:ingots/arkenium',
            I: 'aether:golden_amber'
        }
    )
})