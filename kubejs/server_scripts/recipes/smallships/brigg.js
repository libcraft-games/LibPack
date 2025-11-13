ServerEvents.recipes(e => {
    let type = 'brigg'
    let file = `recipes/${ss}/${type}.js`
    
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

    console.log(`applied changes from ${file}`);
});