ServerEvents.recipes(e => {
    let type = 'brigg'
    
    
    vanilla_woods.forEach(wood => {
        let ship = shipOf(wood, type)
        e.remove({output: ship})
        e.shaped(
            ship,
            [
                'SRS',
                'RCR',
                'BBB'
            ], {
                S: `${ss}:sail`,
                R: '#c:ropes',
                C: `${ie}:component_iron`,
                B: chestBoatOf(wood)
            }
        )
    })

    console.log(`applied all changes successfully!`);
});