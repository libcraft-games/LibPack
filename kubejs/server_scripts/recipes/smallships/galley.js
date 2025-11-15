ServerEvents.recipes(e => {
    let type = 'galley'
    
    
    vanilla_woods.forEach(wood => {
        let ship = shipOf(wood, type)
        e.remove({output: ship})
        e.shaped(
            ship,
            [
                'RSR',
                'CCB'
            ], {
                S: `${ss}:sail`,
                R: '#c:ropes',
                C: chestBoatOf(wood),
                B: boatOf(wood)
            }
        )
    })

    console.log(`applied all changes successfully!`);
});