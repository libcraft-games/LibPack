ServerEvents.recipes(e => {
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

    console.log(`applied all changes successfully!`);
});