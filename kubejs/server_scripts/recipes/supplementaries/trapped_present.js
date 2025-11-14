ServerEvents.recipes(e => {
    let file = `recipes/supplementaries/trapped_present.js`
    
    let present = 'supplementaries:trapped_present'
    let cardboard = 'create:cardboard'

    e.shaped(
        present,
        [
            'CCC',
            'CTC',
            'CCC'
        ], 
        {
            C: cardboard,
            T: 'minecraft:tripwire_hook'
        }
    )

    console.log(`applied changes from ${file}`);
});