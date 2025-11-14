ServerEvents.recipes(e => {
    let type = 'cog'
    let file = `recipes/${ss}/${type}.js`
    
    vanilla_woods.forEach(wood => {
        let ship = shipOf(wood, type)
        e.remove({output: ship})
        e.shaped(
            ship,
            [
                'RSR',
                'BBB'
            ], {
                S: `${ss}:sail`,
                R: '#c:ropes',
                B: boatOf(wood)
            }
        )
    })

    console.log(`applied changes from ${file}`);
});