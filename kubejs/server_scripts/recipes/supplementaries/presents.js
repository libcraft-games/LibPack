ServerEvents.recipes(e => {
    let file = `recipes/supplementaries/presents.js`
    
    let present = 'supplementaries:present'
    let cardboard = 'create:cardboard'

    e.remove({output: present, not: {input: cardboard}})

    global.libcraft.colors.forEach(color => {
        let dye = `#c:dyes/${color}`
        
        e.shaped(
            `supplementaries:present_${color}`,
            [
                'CCC',
                'CDC',
                'CCC'
            ], 
            {
                C: cardboard,
                D: dye
            }
        )
    })

    console.log(`applied changes from ${file}`);
});